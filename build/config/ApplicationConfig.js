'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ApplicationConfigApi = function ApplicationConfigApi() {
    _classCallCheck(this, ApplicationConfigApi);

    this.apiBasePath = 'http://devapi.facility.supplies';
    this.esBasePath = 'http://devqueryapi.facility.supplies';
    //this.apiBasePath = 'https://localhost:44301';
    //this.esBasePath = 'http://localhost:3000';
};

var ApplicationConfig = new ApplicationConfigApi();

module.exports = ApplicationConfig;