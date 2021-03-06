import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://angular-http-9f541.firebaseio.com/data.json', servers, { headers });
    }

    getServers() {
        return this.http.get('https://angular-http-9f541.firebaseio.com/data.json')
            .map(
                (response: Response) => {
                    const data = response.json();
                    for (const server of data) {
                        server.name = 'Got_Form_Firebase_' + server.name;
                    }
                    console.log('from server services: ', data);
                    return data;

                }
            )
    }
}
