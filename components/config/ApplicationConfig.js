'use strict';

class ApplicationConfigApi {
    constructor() {
        this.apiBasePath = window.__env.storeApiUrl;
        this.esBasePath = window.__env.queryApiUrl;
    }
}

var ApplicationConfig = new ApplicationConfigApi();

module.exports = ApplicationConfig;