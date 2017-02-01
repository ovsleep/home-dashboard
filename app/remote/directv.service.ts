import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';

import { CableChannel } from './channel-selector/cable-channel'

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DirectvService {
    baseUrl = 'http://192.168.1.131:9588/api/directv';
    headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private extractTasksResponse(response:any){
        var res = response.json() as any[];
        var array:CableChannel[] = [];
        res.forEach(t =>{
        let task = Object.create(CableChannel.prototype);
        array.push(Object.assign(task, t))
        });
        
        return array;
    }

    /* ***** Select Device ******* */    
    getCableChannels(): Observable<CableChannel[]> {
      return this.http.get(`${this.baseUrl}/fav`)
               .map(this.extractTasksResponse)
               .catch(this.handleError);
  }
}
