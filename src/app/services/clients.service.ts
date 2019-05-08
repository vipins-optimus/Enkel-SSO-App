import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    constructor(private httpClient: HttpClient) {
    }

    getClients(oktaUserEmail) {
        const  params = new  HttpParams().set('userEmail', 'vipin.sharma@optimusinfo.com');
        return this.httpClient.get('GetClients', { params } );
    }
}
