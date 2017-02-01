import { Component } from '@angular/core'
import { RemoteService } from '../remote.service';

@Component({
    selector: 'ac-remote',
    moduleId: module.id,
    templateUrl: 'ac.component.html',
    styleUrls: ['ac.component.css']
})

export class ACComponent {
    temp = 24;
    mode = true;

    constructor(private remoteService: RemoteService){}

    sendCommand(): void {
        console.log(`setting ${this.mode} - ${this.temp}`);
        this.remoteService.setAc(this.mode ? 'hot' : 'cold', this.temp);
    }

    turnOff(): void{
        console.log(`turn off ac`);
        this.remoteService.off("ac");
    }
}