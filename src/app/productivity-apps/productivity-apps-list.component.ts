import { Component, OnInit } from "@angular/core";
import { OktaAuthService } from '@okta/okta-angular';

import { ProductivityAppsService } from '../services/productivity-apps.service';

import { ProductivityAppsModel } from '../models/productivity-apps.model';

@Component({
    selector: 'app-productivity-apps',
    templateUrl: 'productivity-apps-list.component.html'
})
export class ProductivityAppsListComponent implements OnInit{
    productivityApps: ProductivityAppsModel[] = [];

    constructor(private oktaAuth: OktaAuthService,
        private productivityAppsService: ProductivityAppsService) {
    }

    ngOnInit() {
        this.productivityAppsService.getProductivityApps().subscribe((pa: ProductivityAppsModel[])  => {
            this.productivityApps = pa;
            console.log(this.productivityApps);
        },
        error => {
            console.log(error);
        });
    }
}
