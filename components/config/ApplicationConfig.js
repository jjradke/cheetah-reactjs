'use strict';

class ApplicationConfigApi {
    constructor() {
        this.apiBasePath = 'http://devapi.facility.supplies';
        this.esBasePath = 'http://devqueryapi.facility.supplies';
        //this.apiBasePath = 'https://localhost:44301';
        //this.esBasePath = 'http://localhost:3000';
    }
}

var ApplicationConfig = new ApplicationConfigApi();

module.exports = ApplicationConfig;