'use strict';

class ApplicationConfigApi {
    constructor() {
        this.apiBasePath = 'https://localhost:44301';
    }
}

var ApplicationConfig = new ApplicationConfigApi();

module.exports = ApplicationConfig;