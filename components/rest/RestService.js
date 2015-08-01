'use strict';

import Rx from 'rx';
import $ from 'jquery';
import ApplicationConfig from '../config/ApplicationConfig';
import AuthManager from '../security/AuthManager';

class RestServiceApi {
  constructor() {
    this.baseUrl = ApplicationConfig.apiBasePath + '/api/';
  }
  get(resourceName, addl) {
    var url = this.baseUrl + resourceName;
    if (typeof addl === 'string') url += (addl != ''?'/' + addl:'');

    var data = {};
    if (typeof addl === 'object') data = addl;

    return Rx.Observable.create((observer) => {
      $.get(url, data, (result) => {
        observer.onNext(result);
        observer.onCompleted();
      }).fail((error) => {
        observer.onError(error);
      });
    });
  }

  find(resourceName, id) {
    var url = this.baseUrl + resourceName + '/' + encodeURIComponent(id);
    return Rx.Observable.create((observer) => {
      $.get(url, (result) => {
        observer.onNext(result.data);
        observer.onCompleted();
      }).fail((error) => {
        observer.onError(error);
      });
    });
  }

  delete(resourceName, id) {
    var url = this.baseUrl + resourceName + '/' + encodeURIComponent(id);
    return Rx.Observable.create((observer) => {
      $.ajax({
        url: url,
        type: 'DELETE',
        success: (result) => {
          observer.onNext(result);
          observer.onCompleted();
        },
        error: (error) => {
          observer.onError(error);
        }
      });
    });
  }

  update(resourceName, id, params) {
    if (arguments.length == 2) {
      params = id;
      id = null;
    }
    var url = this.baseUrl + resourceName + (id != null ? '/' + encodeURIComponent(id) : '');
    return Rx.Observable.create((observer) => {
      $.ajax({
        url: url,
        type: 'PUT',
        data: params,
        success: (result) => {
          observer.onNext(result);
          observer.onCompleted();
        },
        error: (error) => {
          observer.onError(error);
        }
      });
    });
  }

  create(resourceName, params) {
    var url = this.baseUrl + resourceName;
    return Rx.Observable.create((observer) => {
      $.post(url, params, (result) => {
        observer.onNext(result.data);
        observer.onCompleted();
      })
      .fail((error) => {
        observer.onError(error);
      });
    });
  }
}

var RestService = new RestServiceApi();

module.exports = RestService;