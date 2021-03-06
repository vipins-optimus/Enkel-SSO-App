import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientsService } from '../services/clients.service';

import { ClientsModel } from '../models/clients.model';

import { MessageConstants } from '../shared/message-constants';
import { CompCommunicationService } from '../shared/comp-communication.service';

@Component({
    selector: 'app-clients-list',
    templateUrl: 'clients-list.component.html'
})
export class ClientsListComponent implements OnInit {
    search: string;
    isClientsReceivedByServer = false;
    clients: ClientsModel[] = [];
    textNoMatchFound = MessageConstants.TextNoMatchFound;

    constructor(private clientsService: ClientsService,
                private compCommunicationService: CompCommunicationService,
                private router: Router) {
    }

    ngOnInit() {
        const oktaUserInfo = JSON.parse(localStorage.getItem('oktaUserInfo'));
        if (!oktaUserInfo) {
            this.compCommunicationService.getLoggedInUserDetails();
        } else {
            this.compCommunicationService.setOktaUserInfoAsTrue();
        }
        const oktaUserEmail = {
            Email: this.compCommunicationService.oktaUserInfo.email
        };
        this.clientsService.getClients(oktaUserEmail).subscribe((clients: ClientsModel[])  => {
            this.clients = clients;
            this.isClientsReceivedByServer = true;
            this.compCommunicationService.doSorting(0, this.clients);
        });
    }

    clientDetail(clientId: number): void {
        this.router.navigate(['clients', clientId]);
    }

    doSearch(event: string) {
        this.search = event;
    }

    doSorting(sortBy: number) {
        this.compCommunicationService.doSorting(sortBy, this.clients);
    }
}
