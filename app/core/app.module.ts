import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }   from '../core/app.component';

import { DeviceSelectorComponent } from '../remote/device-selector.component';
import { ACComponent } from '../remote/ac.component';
import { SlickSliderComponent } from '../core/slick-slider.component';
import { SwitchComponent } from '../core/switch.component';

//Directives
//import { SwitchDirective } from '../core/switch.directive';
import { HighlightDirective } from '../core/highlight.directive';

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
    DeviceSelectorComponent,
    ACComponent,
    SlickSliderComponent,
    SwitchComponent,
    HighlightDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
