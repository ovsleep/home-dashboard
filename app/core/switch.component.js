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
var SwitchComponent = (function () {
    function SwitchComponent(el) {
        this.el = el;
        this._statusStr = "false";
        this._status = false;
        //styles properties (in px)
        this._mainWidth = 120;
        this._containerWidth = 180;
        this._switchWidth = 60;
        this._switchMiddleWidth = 50;
        this._onColor = "bootstrap-switch-info";
        this._offColor = "bootstrap-switch-default";
        //public properties
        this.onText = "on";
        this.offText = "off";
        this.statusChange = new core_1.EventEmitter();
        this.status = this._status;
        console.log(this._mainWidth);
    }
    Object.defineProperty(SwitchComponent.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
            this._statusStr = this._status.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "onColor", {
        set: function (value) {
            switch (value) {
                case 'default':
                    this._onColor = "bootstrap-switch-info";
                    break;
                case 'blue':
                    this._onColor = "bootstrap-switch-primary";
                    break;
                case 'sky-blue':
                    this._onColor = "bootstrap-switch-info";
                    break;
                case 'red':
                    this._onColor = "bootstrap-switch-danger";
                    break;
                case 'yellow':
                    this._onColor = "bootstrap-switch-warning";
                    break;
                case 'green':
                    this._onColor = "bootstrap-switch-success";
                    break;
                case 'gray':
                    this._onColor = "bootstrap-switch-default";
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "offColor", {
        set: function (value) {
            switch (value) {
                case 'default':
                    this._offColor = "bootstrap-switch-default";
                    break;
                case 'blue':
                    this._offColor = "bootstrap-switch-primary";
                    break;
                case 'sky-blue':
                    this._offColor = "bootstrap-switch-info";
                    break;
                case 'red':
                    this._offColor = "bootstrap-switch-danger";
                    break;
                case 'yellow':
                    this._offColor = "bootstrap-switch-warning";
                    break;
                case 'green':
                    this._offColor = "bootstrap-switch-success";
                    break;
                case 'gray':
                    this._offColor = "bootstrap-switch-default";
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    SwitchComponent.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.statusChange.emit(this.status);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SwitchComponent.prototype, "onText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SwitchComponent.prototype, "offText", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SwitchComponent.prototype, "statusChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], SwitchComponent.prototype, "status", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SwitchComponent.prototype, "onColor", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], SwitchComponent.prototype, "offColor", null);
    SwitchComponent = __decorate([
        core_1.Component({
            selector: 'switch',
            moduleId: module.id,
            templateUrl: 'switch.component.html',
            animations: [
                core_1.trigger('statusChange', [
                    core_1.state('false', core_1.style({ transform: 'translateX(-33.333%)' })),
                    core_1.state('true', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('true <=> false', core_1.animate('200ms'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SwitchComponent);
    return SwitchComponent;
}());
exports.SwitchComponent = SwitchComponent;
//# sourceMappingURL=switch.component.js.map