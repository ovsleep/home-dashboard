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
var ACComponent = (function () {
    function ACComponent(remoteService) {
        this.remoteService = remoteService;
        this.temp = 24;
        this.mode = true;
    }
    ACComponent.prototype.sendCommand = function () {
        console.log("setting " + this.mode + " - " + this.temp);
        this.remoteService.setAc(this.mode ? 'hot' : 'cold', this.temp);
    };
    ACComponent.prototype.turnOff = function () {
        console.log("turn off ac");
        this.remoteService.off("ac");
    };
    ACComponent = __decorate([
        core_1.Component({
            selector: 'ac-remote',
            moduleId: module.id,
            templateUrl: 'ac.component.html',
            styleUrls: ['ac.component.css']
        }), 
        __metadata('design:paramtypes', [remote_service_1.RemoteService])
    ], ACComponent);
    return ACComponent;
}());
exports.ACComponent = ACComponent;
//# sourceMappingURL=ac.component.js.map