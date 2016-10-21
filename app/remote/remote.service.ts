import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';
import { DeviceSource } from './device-source'
import { DEVICE_SOURCES } from './mock-device-sources';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RemoteService {
    //baseUrl = 'http://192.168.1.101:9589/api/remote';
    baseUrl = 'http://localhost:9589/api/remote';
    headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private sendCommand(command:any):Promise<boolean>{
        const url = `${this.baseUrl}`;
        return this.http
                .post(url, JSON.stringify(command), {headers: this.headers})
                .toPromise()
                .then(response => response.json().message == "OK!")
                .catch(this.handleError);
    }

    getDeviceSources(): Promise<[DeviceSource]> {
        return Promise.resolve(DEVICE_SOURCES); 
    }

    watchDeviceSource(source:DeviceSource):Promise<boolean>{
        let command = {
            'command': 'watch',
            'data': {
                'device': source.name
            }
        };

        return this.sendCommand(command);
    }

    setAc(mode:string, temp: number):Promise<boolean>{
        let command = {
            'command': 'ac',
            'data': {
                'mode': mode,
                'temp': temp
            }
        };

        return this.sendCommand(command);
    }

    off(device:string):Promise<boolean>{
        let command = {
            'command': 'off',
            'data': {
                'device': device
            }
        };

        return this.sendCommand(command);
    }
}
