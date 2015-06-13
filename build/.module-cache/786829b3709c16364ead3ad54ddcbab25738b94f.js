'use strict';

import RestService from './RestService';
import AuthManager from '../security/AuthManager';
import _ from 'underscore';


    function DataStoreApi() {
        this.map = { };
        this.indexMap = { };
        this.totalMap = { };
    }

    Object.defineProperty(DataStoreApi.prototype,"add",{writable:true,configurable:true,value:function(key, data) {
        this.map[key] = data;
    }});

    Object.defineProperty(DataStoreApi.prototype,"total",{writable:true,configurable:true,value:function(key) {
        return this.totalMap[key];
    }});

    Object.defineProperty(DataStoreApi.prototype,"size",{writable:true,configurable:true,value:function(key) {
        return this.map[key] == null? 0 : this.map[key].length;
    }});

    Object.defineProperty(DataStoreApi.prototype,"get",{writable:true,configurable:true,value:function(key, params, isSearch) {
        return Rx.Observable.create(function(observer)  {
            if (this.map[key] != null && !isSearch) {
                observer.onNext(this.map[key]);
                observer.onCompleted();
            } else {
               RestService.get(key, params).subscribe(function(result)  {
                   if (result.total && result.total > 0) {
                       this.totalMap[key] = result.total;
                   }
                    this.add(key, result.data);

                    observer.onNext(result.data);
                    observer.onCompleted();
                }.bind(this), function(errorResult)  {
                   if (errorResult.status != 500) {
                       AuthManager.logout(true).subscribe(function(response)  {
                           observer.onError(errorResult);
                       });
                   }
               });
            }
        }.bind(this));

    }});

    Object.defineProperty(DataStoreApi.prototype,"getByOffset",{writable:true,configurable:true,value:function(key, params) {
        console.log(params);
        var offset = params.$DataStoreApi_offset,
            size = params.$DataStoreApi_size;
        return Rx.Observable.create(function(observer)  {
            if (this.map[key] != null && this.map[key].length >= offset && this.map[key][offset] != null) {
                observer.onNext(this.map[key].filter(function(item, index)  {return index >= offset && index < offset+size;} ));
                observer.onCompleted();
            } else {
                RestService.get(key, params).subscribe(function(result)  {
                    if (result.total && result.total > 0) {
                        this.totalMap[key] = result.total;
                    }
                    if (this.map[key] == null) {
                        this.map[key] = [];
                    }

                    if (this.map[key].length == offset) {
                        result.data.forEach(function(item)  {
                            this.map[key].push(item);
                        }.bind(this));
                    } else if (this.map[key].length < offset) {
                        while (this.map[key].length < offset) {
                            this.map[key].push(null);
                        }

                        result.data.forEach(function(item)  {
                            this.map[key].push(item);
                        }.bind(this))
                    } else {
                        result.data.forEach(function(item, index)  {
                            index = offset+index;
                            if (index == this.map[key].length) {
                                this.map[key].push(item);
                            } else if (index < this.map[key].length) {
                                this.map[key][index] = item;
                            }
                        }.bind(this));
                    }
                    observer.onNext(result.data);
                    observer.onCompleted();
                }.bind(this), function(errorResult)  {
                    if (errorResult.status != 500) {
                        AuthManager.logout(true).subscribe(function(response)  {
                            observer.onError(errorResult);
                        });
                    }
                });
            }
        }.bind(this));

    }});

    Object.defineProperty(DataStoreApi.prototype,"getById",{writable:true,configurable:true,value:function(key, id) {
        return Rx.Observable.create(function(observer)  {
            var result = this.map[key] != null ? this.map[key].filter(function(item)  {
                if (typeof id === 'string' || typeof id === 'number') {
                    return item.Id == id;
                } else if (typeof id === 'object') {
                    return item[id.Key] == id.Value;
                }
                return null;
            }) : [];
            if (result.length == 0) {
                RestService.find(key, id).subscribe(function(result)  {
                    observer.onNext(result);
                    observer.onCompleted();
                }, function(errorResult)  {
                    observer.onError(errorResult);
                });
            } else {
                observer.onNext(result[0]);
                observer.onCompleted();
            }
        }.bind(this));
    }});

    Object.defineProperty(DataStoreApi.prototype,"getByIndex",{writable:true,configurable:true,value:function(key, id) {
        var index = this.indexMap[key];

        return Rx.Observable.create(function(observer)  {
            if (this.map[key] != null && this.map[key].length > index) {
                console.log('retrieved from cache!');
                observer.onNext(this.map[key][this.indexMap[key]]);
                observer.onCompleted();
            } else {
                this.getById(key, id).subscribe(function(data)  {
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
                }.bind(this));
            }
        }.bind(this));
    }});

    Object.defineProperty(DataStoreApi.prototype,"addIndex",{writable:true,configurable:true,value:function(key, index) {
        this.indexMap[key] = index;
    }});

    Object.defineProperty(DataStoreApi.prototype,"getIndex",{writable:true,configurable:true,value:function(key) {
        return this.indexMap[key];
    }});

    Object.defineProperty(DataStoreApi.prototype,"previous",{writable:true,configurable:true,value:function(key) {
        if (this.hasPrevious(key)) {
            this.indexMap[key] = this.indexMap[key]-1;
        }
    }});

    Object.defineProperty(DataStoreApi.prototype,"next",{writable:true,configurable:true,value:function(key) {
        if (this.hasNext(key)) {
            this.indexMap[key] = this.indexMap[key]+1;
        }
    }});

    Object.defineProperty(DataStoreApi.prototype,"hasPrevious",{writable:true,configurable:true,value:function(key) {
        return this.indexMap[key] != null && this.indexMap[key] > 0;
    }});

    Object.defineProperty(DataStoreApi.prototype,"hasNext",{writable:true,configurable:true,value:function(key) {
        var currentIndex = this.indexMap[key];
        return currentIndex != null && currentIndex < this.map[key].length-1;
    }});


var DataStore = new DataStoreApi();

module.exports = DataStore;