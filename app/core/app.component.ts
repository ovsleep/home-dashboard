import { Component } from '@angular/core'
import { RemoteService } from '../remote/remote.service'

@Component({
    selector: 'home-dashboard',
    moduleId: module.id,
    templateUrl: "app.component.html",
    providers: [RemoteService]
})

export class AppComponent {
    title = 'Home Dashboard';
}