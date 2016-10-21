import { Component, OnInit } from '@angular/core'
import { DeviceSource } from './device-source'
import { RemoteService } from './remote.service';

@Component({
    selector: 'device-selector',
    moduleId: module.id,
    templateUrl: 'device-selector.component.html',
    providers: []
})



export class DeviceSelectorComponent implements OnInit {

    sources: [DeviceSource];

    ngOnInit(): void {
        this.getDeviceSources();
    }

    constructor(private remoteService: RemoteService){}

    getDeviceSources(): void {
        this.remoteService.getDeviceSources().then(sources => this.sources = sources);
    }

    watchSource(source: DeviceSource): void {
        console.log(`watching ${source.name}`);
        this.remoteService.watchDeviceSource(source);
    }
}