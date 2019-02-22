import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ClientsModel } from '../models/clients.model';
import { OktaAuthService } from '@okta/okta-angular';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
})
export class ClientsService {
    
    constructor(private oktaAuth: OktaAuthService,
        private httpClient: HttpClient) {
    }

    getClients(oktaUserEmail) {
        return this.httpClient.post('http://192.168.2.27:8080/application/GetClients', oktaUserEmail, httpOptions);
    }
}
