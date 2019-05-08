import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductivityAppsService {
    constructor(private httpClient: HttpClient) { }


    getProductivityApps() {
        // const clientId = { clientId: 100 };
        const  params = new  HttpParams().set('clientId', '100');
        return this.httpClient.get('GetApplications',  { params });
    }

    getProductivityAppsByClientId(clientId: number) {
        const  params = new  HttpParams().set('clientId', '101');
        return this.httpClient.get('GetApplications', { params });
    }
}
