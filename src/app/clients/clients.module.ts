import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { OktaAuthGuard } from '@okta/okta-angular';

import { ClientsListComponent } from './clients-list.component';
import { ClientsDetailComponent } from './clients-detail.component';

@NgModule({
    imports: [
        BrowserModule,
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
