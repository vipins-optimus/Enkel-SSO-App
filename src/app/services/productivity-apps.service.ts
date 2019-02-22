import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductivityAppsModel } from '../models/productivity-apps.model';
import { ClientsModel } from '../models/clients.model';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ProductivityAppsService {
    constructor(private httpClient: HttpClient) { }

    getProductivityApps() {
        const x = {
            'clientId': 1
        };
        return this.httpClient.post('http://192.168.2.27:8080/application/GetApplications', x, httpOptions);
    }

    getProductivityAppsByClientId(clientId: number) {
        const data = {
            'clientId': clientId
        };
        return this.httpClient.post('http://192.168.2.27:8080/application/GetApplications', data, httpOptions);
    }
}
