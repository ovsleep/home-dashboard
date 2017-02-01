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
var directv_service_1 = require('../directv.service');
var remote_service_1 = require('../remote.service');
var ChannelSelectorComponent = (function () {
    function ChannelSelectorComponent(directvService, remoteService) {
        this.directvService = directvService;
        this.remoteService = remoteService;
    }
    ChannelSelectorComponent.prototype.ngOnInit = function () {
        this.getChannels();
    };
    ChannelSelectorComponent.prototype.getChannels = function () {
        var _this = this;
        this.directvService.getCableChannels().subscribe(function (channels) { return _this.channels = channels; });
    };
    ChannelSelectorComponent.prototype.watchChannel = function (channel) {
        this.remoteService.watchChannel(channel);
    };
    ChannelSelectorComponent = __decorate([
        core_1.Component({
            selector: 'channel-selector',
            moduleId: module.id,
            templateUrl: 'channel-selector.component.html',
            styleUrls: ['channel-selector.component.css'],
            providers: []
        }), 
        __metadata('design:paramtypes', [directv_service_1.DirectvService, remote_service_1.RemoteService])
    ], ChannelSelectorComponent);
    return ChannelSelectorComponent;
}());
exports.ChannelSelectorComponent = ChannelSelectorComponent;
//# sourceMappingURL=channel-selector.component.js.map