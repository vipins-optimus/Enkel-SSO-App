import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

import { ProductivityAppsService } from '../services/productivity-apps.service';

import { ProductivityAppsModel } from '../models/productivity-apps.model';
import { MessageConstants } from '../shared/message-constants';

@Component({
    selector: 'app-productivity-apps',
    templateUrl: 'productivity-apps-list.component.html'
})
export class ProductivityAppsListComponent implements OnInit {
    isAppsReceivedByServer = false;
    productivityApps: ProductivityAppsModel[] = [];
    textNoMatchFound = MessageConstants.TextNoMatchFound;

    constructor(private productivityAppsService: ProductivityAppsService,
                private oktaAuth: OktaAuthService) {
    }

    ngOnInit() {
        this.productivityAppsService.getProductivityApps().subscribe((pa: ProductivityAppsModel[]) => {
            this.productivityApps = pa;
            this.isAppsReceivedByServer = true;
        },
        error => {
        });
    }
}
