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
require('slick-slider');
var SlickSliderComponent = (function () {
    function SlickSliderComponent(el) {
        this.el = el;
        this.defaultOptions = {
            dots: false,
            infinite: false,
            speed: 300,
            //slidesToShow: 4,
            //slidesToScroll: 2,
            //adaptiveHeight: false,
            variableWidth: true,
        };
    }
    SlickSliderComponent.prototype.ngAfterContentInit = function () {
        for (var key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }
        this.$element = jQuery(this.el.nativeElement).slick(this.defaultOptions);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SlickSliderComponent.prototype, "options", void 0);
    SlickSliderComponent = __decorate([
        core_1.Component({
            selector: 'slick-slider',
            template: "\n        <ng-content></ng-content>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SlickSliderComponent);
    return SlickSliderComponent;
}());
exports.SlickSliderComponent = SlickSliderComponent;
//# sourceMappingURL=slick-slider.component.js.map