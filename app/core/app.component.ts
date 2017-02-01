import { Component } from '@angular/core'
import { RemoteService } from '../remote/remote.service'
import { DirectvService } from '../remote/directv.service'

@Component({
    selector: 'home-dashboard',
    moduleId: module.id,
    templateUrl: "app.component.html",
    providers: [RemoteService, DirectvService]
})

export class AppComponent {
    title = 'Home Dashboard';
}