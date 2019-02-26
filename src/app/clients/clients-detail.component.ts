import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute } from '@angular/router';

import { ProductivityAppsService } from '../services/productivity-apps.service';

import { ProductivityAppsModel } from '../models/productivity-apps.model';

@Component({
    selector: 'app-clients-detail',
    templateUrl: 'clients-detail.component.html'
})
export class ClientsDetailComponent implements OnInit {
    productivityApps: ProductivityAppsModel[] = [];

    constructor(private activatedRoute: ActivatedRoute,
                private oktaAuth: OktaAuthService,
                private productivityAppsService: ProductivityAppsService) {
    }

    ngOnInit() {
        const clientId = this.activatedRoute.snapshot.params['clientId'];
        this.productivityAppsService.getProductivityAppsByClientId(clientId).subscribe((pa: ProductivityAppsModel[])  => {
            this.productivityApps = pa;
            console.log(pa);
        },
        error => {
            console.log(error);
        });
    }
}
