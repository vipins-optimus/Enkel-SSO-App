import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    constructor(private httpClient: HttpClient) {
    }

    getClients(oktaUserEmail) {
        return this.httpClient.post('GetClients', oktaUserEmail);
    }
}
