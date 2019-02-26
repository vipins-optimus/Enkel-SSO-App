import { Component, OnInit } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { Router } from '@angular/router';

import { ClientsService } from '../services/clients.service';

import { ClientsModel } from '../models/clients.model';

import { MessageConstants } from '../shared/message-constants';

@Component({
    selector: 'app-clients-list',
    templateUrl: 'clients-list.component.html'
})
export class ClientsListComponent implements OnInit {
    isClientsReceivedByServer = false;
    clients: ClientsModel[] = [];
    textNoMatchFound = MessageConstants.TextNoMatchFound;

    constructor(private oktaAuth: OktaAuthService,
                private clientsService: ClientsService,
                private router: Router) {
    }

    async ngOnInit() {
        const oktaUserInfo: UserClaims  =  await this.oktaAuth.getUser();
        const oktaUserEmail = {
            Email: oktaUserInfo.email
        };
        this.clientsService.getClients(oktaUserEmail).subscribe((clients: ClientsModel[])  => {
            this.clients = clients;
            this.isClientsReceivedByServer = true;
        },
        error => {
        });
    }

    clientDetail(clientId: number): void {
        this.router.navigate(['clients', clientId]);
    }
}
