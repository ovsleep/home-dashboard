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
var AutoGrowComponent = (function () {
    function AutoGrowComponent() {
        this.status = false;
        this.log = '';
    }
    Object.defineProperty(AutoGrowComponent.prototype, "statusStr", {
        get: function () {
            return this.status.toString();
        },
        enumerable: true,
        configurable: true
    });
    AutoGrowComponent.prototype.setStatus = function (value, event) {
        if (!this.lastEventType) {
            this.lastEventType = event.type.startsWith('mouse') ? 'mouse' : 'touch';
        }
        if (this.lastEventType == 'touch') {
            if (event.type.startsWith('mouse')) {
                return; //ignore event if the previous was a touch event
            }
            else {
                this.lastEventType = 'touch';
            }
        }
        this.status = value;
    };
    AutoGrowComponent = __decorate([
        core_1.Component({
            selector: 'auto-grow',
            template: "<div \n                    (mouseenter)=\"setStatus(true, $event)\"\n                    (mouseleave)=\"setStatus(false, $event)\"\n                    (touchstart)=\"setStatus(true, $event)\"\n                    (touchend)=\"setStatus(false, $event)\"\n                    [@statusChange]=\"statusStr\">\n                        <ng-content></ng-content>\n                <div>{{log}}",
            providers: [],
            animations: [
                core_1.trigger('statusChange', [
                    core_1.state('false', core_1.style({ transform: 'scale(1)' })),
                    core_1.state('true', core_1.style({ transform: 'scale(1.2)' })),
                    core_1.transition('true <=> false', core_1.animate('200ms'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AutoGrowComponent);
    return AutoGrowComponent;
}());
exports.AutoGrowComponent = AutoGrowComponent;
//# sourceMappingURL=auto-grow.component.js.map