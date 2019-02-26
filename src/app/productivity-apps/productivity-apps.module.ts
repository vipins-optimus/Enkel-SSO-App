import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OktaAuthGuard } from '@okta/okta-angular';

import { SharedModule } from '../shared/shared.module';

import { ProductivityAppsListComponent } from './productivity-apps-list.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        SharedModule,
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
