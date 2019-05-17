import { Component, OnInit } from '@angular/core';

import { ProductivityAppsService } from './productivity-apps.service';
import { CompCommunicationService } from '../shared/comp-communication.service';

import { ProductivityAppModel } from './productivity-apps.model';
import { MessageConstants } from '../shared/message-constants';

@Component({
    selector: 'app-productivity-apps',
    templateUrl: 'productivity-apps-list.component.html'
})
export class ProductivityAppsListComponent implements OnInit {
    search: string;
    isAppsReceivedByServer = false;
    productivityApps: ProductivityAppModel[] = [];
    textNoMatchFound = MessageConstants.TextNoMatchFound;

    constructor(private productivityAppsService: ProductivityAppsService,
                private compCommunicationService: CompCommunicationService) {
    }

    ngOnInit() {
        const oktaUserInfo = JSON.parse(localStorage.getItem('oktaUserInfo'));
        if (!oktaUserInfo) {
            this.compCommunicationService.getLoggedInUserDetails();
        } else {
            this.compCommunicationService.setOktaUserInfoAsTrue();
        }
        this.productivityAppsService.getProductivityApps()
            .subscribe((pa: ProductivityAppModel[]) => {
                this.productivityApps = pa;
                this.isAppsReceivedByServer = true;
                this.compCommunicationService.doSorting(0, this.productivityApps);
            });
    }

    doSearch(event: string) {
        this.search = event;
    }

    doSorting(sortBy: number) {
        this.compCommunicationService.doSorting(sortBy, this.productivityApps);
    }
}
