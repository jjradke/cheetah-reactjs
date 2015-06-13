'use strict';

import Rx from 'Rx';
import $ from 'jquery';
import ApplicationConfig from '../config/ApplicationConfig';
import AuthManager from '../security/AuthManager';


  function RestServiceApi() {
    this.baseUrl = ApplicationConfig.apiBasePath + '/api/';
  }
  Object.defineProperty(RestServiceApi.prototype,"get",{writable:true,configurable:true,value:function(resourceName, addl) {
    var url = this.baseUrl + resourceName;
    if (typeof addl === 'string') url += (addl != ''?'/' + addl:'');

    var data = {};
    if (typeof addl === 'object') data = addl;

    return Rx.Observable.create(function(observer)  {
      $.get(url, data, function(result)  {
        observer.onNext(result);
        observer.onCompleted();
      }).fail(function(error)  {
        observer.onError(error);
      });
    });
  }});

  Object.defineProperty(RestServiceApi.prototype,"find",{writable:true,configurable:true,value:function(resourceName, id) {
    var url = this.baseUrl + resourceName + '/' + encodeURIComponent(id);
    return Rx.Observable.create(function(observer)  {
      $.get(url, function(result)  {
        observer.onNext(result.data);
        observer.onCompleted();
      }).fail(function(error)  {
        observer.onError(error);
      });
    });
  }});

  Object.defineProperty(RestServiceApi.prototype,"delete",{writable:true,configurable:true,value:function(resourceName, id) {
    var url = this.baseUrl + resourceName + '/' + encodeURIComponent(id);
    return Rx.Observable.create(function(observer)  {
      $.ajax({
        url: url,
        type: 'DELETE',
        success: function(result)  {
          observer.onNext(result);
          observer.onCompleted();
        },
        error: function(error)  {
          observer.onErorr(error);
        }
      });
    });
  }});

  Object.defineProperty(RestServiceApi.prototype,"update",{writable:true,configurable:true,value:function(resourceName, id, params) {
    var url = this.baseUrl + resourceName + '/' + encodeURIComponent(id);
    return Rx.Observable.create(function(observer)  {
      $.ajax({
        url: url,
        type: 'PUT',
        data: params,
        dataType: 'json',
        success: function(result)  {
          observer.onNext(result);
          observer.onCompleted();
        },
        error: function(error)  {
          observer.onError(error);
        }
      });
    });
  }});

  Object.defineProperty(RestServiceApi.prototype,"create",{writable:true,configurable:true,value:function(resourceName, params) {
    var url = this.baseUrl + resourceName;
    return Rx.Observable.create(function(observer)  {
      $.post(url, params, function(result)  {
        observer.onNext(result.data);
        observer.onCompleted();
      })
      .fail(function(error)  {
        observer.onError(error);
      });
    });
  }});


var RestService = new RestServiceApi();

module.exports = RestService;