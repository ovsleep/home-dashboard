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
var cable_channel_1 = require('./channel-selector/cable-channel');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var DirectvService = (function () {
    function DirectvService(http) {
        this.http = http;
        this.baseUrl = 'http://192.168.1.131:9588/api/directv';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DirectvService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    DirectvService.prototype.extractTasksResponse = function (response) {
        var res = response.json();
        var array = [];
        res.forEach(function (t) {
            var task = Object.create(cable_channel_1.CableChannel.prototype);
            array.push(Object.assign(task, t));
        });
        return array;
    };
    /* ***** Select Device ******* */
    DirectvService.prototype.getCableChannels = function () {
        return this.http.get(this.baseUrl + "/fav")
            .map(this.extractTasksResponse)
            .catch(this.handleError);
    };
    DirectvService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DirectvService);
    return DirectvService;
}());
exports.DirectvService = DirectvService;
//# sourceMappingURL=directv.service.js.map