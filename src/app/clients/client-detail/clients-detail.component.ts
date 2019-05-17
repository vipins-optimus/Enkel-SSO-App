import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductivityAppsService } from '../../productivity-apps/productivity-apps.service';
import { CompCommunicationService } from '../../shared/comp-communication.service';

import { ProductivityAppModel } from '../../productivity-apps/productivity-apps.model';

import { MessageConstants } from '../../shared/message-constants';

@Component({
    selector: 'app-clients-detail',
    templateUrl: 'clients-detail.component.html'
})
export class ClientsDetailComponent implements OnInit {
    appsAssignedToClient: ProductivityAppModel[] = [];
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
        this.productivityAppsService.getProductivityAppsByClientId(clientId).subscribe((pa: ProductivityAppModel[])  => {
            this.appsAssignedToClient = pa;
            this.isAppsReceivedByServer = true;
            this.compCommunicationService.doSorting(0, this.appsAssignedToClient);
        });
    }

    doSearch(event: string) {
        this.search = event;
    }

    doSorting(sortBy: number) {
        this.compCommunicationService.doSorting(sortBy, this.appsAssignedToClient);
    }
}
