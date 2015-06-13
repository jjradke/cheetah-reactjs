'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ApplicationConfigApi = function ApplicationConfigApi() {
    _classCallCheck(this, ApplicationConfigApi);

    this.apiBasePath = 'https://localhost:44301';
};

var ApplicationConfig = new ApplicationConfigApi();

module.exports = ApplicationConfig;