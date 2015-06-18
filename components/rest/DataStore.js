'use strict';

import RestService from './RestService';
import AuthManager from '../security/AuthManager';
import _ from 'underscore';
import Rx from 'rx';

class DataStoreApi {
    constructor() {
        this.map = { };
        this.indexMap = { };
        this.totalMap = { };
    }

    add(key, data) {
        this.map[key] = data;
    }

    total(key) {
        return this.totalMap[key];
    }

    size(key) {
        return this.map[key] == null? 0 : this.map[key].length;
    }

    get(key, params, isSearch) {
        return Rx.Observable.create((observer) => {
            if (this.map[key] != null && !isSearch) {
                observer.onNext(this.map[key]);
                observer.onCompleted();
            } else {
               RestService.get(key, params).subscribe((result) => {
                   if (result.total && result.total > 0) {
                       this.totalMap[key] = result.total;
                   }
                    this.add(key, result.data);

                    observer.onNext(result.data);
                    observer.onCompleted();
                }, (errorResult) => {
                   if (errorResult.status != 500) {
                       AuthManager.logout(true).subscribe((response) => {
                           observer.onError(errorResult);
                       });
                   }
               });
            }
        });

    }

    getByOffset(key, params) {
        var offset = params._offset,
            size = params._size;
        return Rx.Observable.create((observer) => {
            if (this.map[key] != null && this.map[key].length >= offset && this.map[key][offset] != null) {
                observer.onNext(this.map[key].filter((item, index) => index >= offset && index < offset+size ));
                observer.onCompleted();
            } else {
                RestService.get(key, params).subscribe((result) => {
                    if (result.total && result.total > 0) {
                        this.totalMap[key] = result.total;
                    }
                    if (this.map[key] == null) {
                        this.map[key] = [];
                    }

                    if (this.map[key].length == offset) {
                        result.data.forEach((item) => {
                            this.map[key].push(item);
                        });
                    } else if (this.map[key].length < offset) {
                        while (this.map[key].length < offset) {
                            this.map[key].push(null);
                        }

                        result.data.forEach((item) => {
                            this.map[key].push(item);
                        })
                    } else {
                        result.data.forEach((item, index) => {
                            index = offset+index;
                            if (index == this.map[key].length) {
                                this.map[key].push(item);
                            } else if (index < this.map[key].length) {
                                this.map[key][index] = item;
                            }
                        });
                    }
                    observer.onNext(result.data);
                    observer.onCompleted();
                }, (errorResult) => {
                    if (errorResult.status != 500) {
                        AuthManager.logout(true).subscribe((response) => {
                            observer.onError(errorResult);
                        });
                    }
                });
            }
        });

    }

    getById(key, id) {
        return Rx.Observable.create((observer) => {
            var result = this.map[key] != null ? this.map[key].filter(item => {
                if (typeof id === 'string' || typeof id === 'number') {
                    return item.Id == id;
                } else if (typeof id === 'object') {
                    return item[id.Key] == id.Value;
                }
                return null;
            }) : [];
            if (result.length == 0) {
                RestService.find(key, id).subscribe((result) => {
                    observer.onNext(result);
                    observer.onCompleted();
                }, (errorResult) => {
                    observer.onError(errorResult);
                });
            } else {
                observer.onNext(result[0]);
                observer.onCompleted();
            }
        });
    }

    getByIndex(key, id) {
        var index = this.indexMap[key];

        return Rx.Observable.create((observer) => {
            if (this.map[key] != null && this.map[key].length > index) {
                console.log('retrieved from cache!');
                observer.onNext(this.map[key][this.indexMap[key]]);
                observer.onCompleted();
            } else {
                this.getById(key, id).subscribe((data) => {
                    if (!(data instanceof Array)) data = [data];
                    this.add(key, data);

                    for (var index = 0; index < data.length; index++) {
                        var row = data[index];
                        if (row.Id == id) {
                            this.indexMap[key] = index;
                            break;
                        }
                    }

                    observer.onNext(this.map[key][this.indexMap[key]]);
                    observer.onCompleted();
                });
            }
        });
    }

    addIndex(key, index) {
        this.indexMap[key] = index;
    }

    getIndex(key) {
        return this.indexMap[key];
    }

    previous(key) {
        if (this.hasPrevious(key)) {
            this.indexMap[key] = this.indexMap[key]-1;
        }
    }

    next(key) {
        if (this.hasNext(key)) {
            this.indexMap[key] = this.indexMap[key]+1;
        }
    }

    hasPrevious(key) {
        return this.indexMap[key] != null && this.indexMap[key] > 0;
    }

    hasNext(key) {
        var currentIndex = this.indexMap[key];
        return currentIndex != null && currentIndex < this.map[key].length-1;
    }
}

var DataStore = new DataStoreApi();

module.exports = DataStore;