import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductivityAppModel } from './productivity-apps.model';


@Injectable({
    providedIn: 'root'
})
export class ProductivityAppsService {
    constructor(private httpClient: HttpClient) { }


    getProductivityApps(): Observable<ProductivityAppModel[]> {
        const  params = new  HttpParams().set('clientId', '100');
        return this.httpClient.get<ProductivityAppModel[]>('GetApplications',  { params });
    }

    getProductivityAppsByClientId(clientId: number): Observable<ProductivityAppModel[]> {
        const  params = new  HttpParams().set('clientId', clientId.toString());
        return this.httpClient.get<ProductivityAppModel[]>('GetApplications', { params });
    }
}
