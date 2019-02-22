import { Component, OnInit } from "@angular/core";
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { Router } from '@angular/router';

import { ClientsService } from '../services/clients.service';

import { ClientsModel } from '../models/clients.model';

@Component({
    selector: 'app-clients-list',
    templateUrl: 'clients-list.component.html'
})
export class ClientsListComponent implements OnInit {
    clients: ClientsModel[] = [];

    constructor(private oktaAuth: OktaAuthService,
        private clientsService: ClientsService,
        private router: Router) {
    }

    async ngOnInit() {
        const oktaUserInfo: UserClaims  =  await this.oktaAuth.getUser();
        const oktaUserEmail = {
            Email: oktaUserInfo.email
        }
        this.clientsService.getClients(oktaUserEmail).subscribe((clients: ClientsModel[])  => {
            this.clients = clients;
        },
        error => {
        });
    }

    clientDetail(clientId: number): void {
        this.router.navigate(['clients', clientId]);
    }
}
