import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductivityAppsService {
    constructor(private httpClient: HttpClient) { }

    getProductivityApps() {
        const x = { clientId: 1 };
        return this.httpClient.post('GetApplications', x);
    }

    getProductivityAppsByClientId(clientId: number) {
        const data = { 'clientId': clientId };
        return this.httpClient.post('GetApplications', data);
    }
}
