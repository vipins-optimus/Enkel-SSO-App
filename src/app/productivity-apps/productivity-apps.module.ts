import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';

import { ProductivityAppsListComponent } from './productivity-apps-list.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild([
            {
                path: 'productivity-apps',
                component: ProductivityAppsListComponent,
                canActivate: [OktaAuthGuard]
            }
        ])
    ],
    declarations: [
        ProductivityAppsListComponent
    ]
})
export class ProductivityAppsModule { }
