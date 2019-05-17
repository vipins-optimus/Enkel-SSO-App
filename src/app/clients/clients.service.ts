import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ClientModel } from './client.model';


@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    constructor(private httpClient: HttpClient) {
    }

    getClients(oktaUserEmail): Observable<ClientModel[]> {
        const  params = new  HttpParams().set('userEmail', 'vipin.sharma@optimusinfo.com');
        return this.httpClient.get<ClientModel[]>('GetClients', { params } );
    }
}
