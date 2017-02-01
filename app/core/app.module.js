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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
//bootstrap
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_component_1 = require('../core/app.component');
var device_selector_component_1 = require('../remote/device-selector/device-selector.component');
var channel_selector_component_1 = require('../remote/channel-selector/channel-selector.component');
var ac_component_1 = require('../remote/ac/ac.component');
var slick_slider_component_1 = require('../core/slick-slider.component');
var auto_grow_component_1 = require('../core/auto-grow.component');
var components_1 = require('angular2-bootstrap-switch/components');
//Directives
//import { routing } from './app.routing';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng_bootstrap_1.NgbModule.forRoot(),
            ],
            declarations: [
                app_component_1.AppComponent,
                channel_selector_component_1.ChannelSelectorComponent,
                device_selector_component_1.DeviceSelectorComponent,
                ac_component_1.ACComponent,
                slick_slider_component_1.SlickSliderComponent,
                auto_grow_component_1.AutoGrowComponent,
                components_1.SwitchComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map