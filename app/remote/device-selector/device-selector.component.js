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
var remote_service_1 = require('../remote.service');
var DeviceSelectorComponent = (function () {
    function DeviceSelectorComponent(remoteService) {
        this.remoteService = remoteService;
    }
    DeviceSelectorComponent.prototype.ngOnInit = function () {
        this.getDeviceSources();
    };
    DeviceSelectorComponent.prototype.getDeviceSources = function () {
        var _this = this;
        this.remoteService.getDeviceSources().then(function (sources) { return _this.sources = sources; });
    };
    DeviceSelectorComponent.prototype.watchSource = function (source) {
        console.log("watching " + source.name);
        this.remoteService.watchDeviceSource(source);
    };
    DeviceSelectorComponent = __decorate([
        core_1.Component({
            selector: 'device-selector',
            moduleId: module.id,
            templateUrl: 'device-selector.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [remote_service_1.RemoteService])
    ], DeviceSelectorComponent);
    return DeviceSelectorComponent;
}());
exports.DeviceSelectorComponent = DeviceSelectorComponent;
//# sourceMappingURL=device-selector.component.js.map