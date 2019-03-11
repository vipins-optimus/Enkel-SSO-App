import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductivityAppsService } from '../services/productivity-apps.service';
import { CompCommunicationService } from '../shared/comp-communication.service';

import { ProductivityAppsModel } from '../models/productivity-apps.model';

import { MessageConstants } from '../shared/message-constants';

@Component({
    selector: 'app-clients-detail',
    templateUrl: 'clients-detail.component.html'
})
export class ClientsDetailComponent implements OnInit {
    AppsAssignedToClient: ProductivityAppsModel[] = [];
    textNoMatchFound = MessageConstants.TextNoMatchFound;
    isAppsReceivedByServer = false;
    search: string;

    constructor(private activatedRoute: ActivatedRoute,
                private compCommunicationService: CompCommunicationService,
                private productivityAppsService: ProductivityAppsService) {
    }

    ngOnInit() {
        const oktaUserInfo = JSON.parse(localStorage.getItem('oktaUserInfo'));
        if (!oktaUserInfo) {
            this.compCommunicationService.getLoggedInUserDetails();
        } else {
            this.compCommunicationService.setOktaUserInfoAsTrue();
        }
        const clientId = this.activatedRoute.snapshot.params['clientId'];
        this.productivityAppsService.getProductivityAppsByClientId(clientId).subscribe((pa: ProductivityAppsModel[])  => {
            this.AppsAssignedToClient = pa;
            this.isAppsReceivedByServer = true;
        },
        error => {
        });
    }

    doSearchChange(event) {
        this.search = event;
    }
}
