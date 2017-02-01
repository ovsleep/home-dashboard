import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }   from '../core/app.component';

import { DeviceSelectorComponent } from '../remote/device-selector/device-selector.component';
import { ChannelSelectorComponent } from '../remote/channel-selector/channel-selector.component';
import { ACComponent } from '../remote/ac/ac.component';
import { SlickSliderComponent } from '../core/slick-slider.component';
import { AutoGrowComponent } from '../core/auto-grow.component';

import { SwitchComponent } from 'angular2-bootstrap-switch/components';

//Directives
//import { routing } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    // routing
     ],
  declarations: [ 
    AppComponent,
    ChannelSelectorComponent,
    DeviceSelectorComponent,
    ACComponent,
    SlickSliderComponent,
    AutoGrowComponent,
    SwitchComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
