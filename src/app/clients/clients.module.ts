import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OktaAuthGuard } from '@okta/okta-angular';

import { SharedModule } from '../shared/shared.module';

import { ClientsListComponent } from './client-list/clients-list.component';
import { ClientsDetailComponent } from './client-detail/clients-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: 'clients',
                component: ClientsListComponent,
                canActivate: [ OktaAuthGuard ]
            },
            {
                path: 'clients/:clientId',
                component: ClientsDetailComponent,
                canActivate: [ OktaAuthGuard ]
            }
        ])
    ],
    declarations: [
        ClientsListComponent,
        ClientsDetailComponent
    ]
})
export class ClientsModule { }
