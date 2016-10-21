"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var mock_device_sources_1 = require('./mock-device-sources');
require('rxjs/add/operator/toPromise');
var RemoteService = (function () {
    function RemoteService(http) {
        this.http = http;
        //baseUrl = 'http://192.168.1.101:9589/api/remote';
        this.baseUrl = 'http://localhost:9589/api/remote';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    RemoteService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RemoteService.prototype.sendCommand = function (command) {
        var url = "" + this.baseUrl;
        return this.http
            .post(url, JSON.stringify(command), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().message == "OK!"; })
            .catch(this.handleError);
    };
    RemoteService.prototype.getDeviceSources = function () {
        return Promise.resolve(mock_device_sources_1.DEVICE_SOURCES);
    };
    RemoteService.prototype.watchDeviceSource = function (source) {
        var command = {
            'command': 'watch',
            'data': {
                'device': source.name
            }
        };
        return this.sendCommand(command);
    };
    RemoteService.prototype.setAc = function (mode, temp) {
        var command = {
            'command': 'ac',
            'data': {
                'mode': mode,
                'temp': temp
            }
        };
        return this.sendCommand(command);
    };
    RemoteService.prototype.off = function (device) {
        var command = {
            'command': 'off',
            'data': {
                'device': device
            }
        };
        return this.sendCommand(command);
    };
    RemoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RemoteService);
    return RemoteService;
}());
exports.RemoteService = RemoteService;
//# sourceMappingURL=remote.service.js.map