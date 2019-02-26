import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'productivity-apps',
        pathMatch: 'full'
    },
    {
        path: 'implicit/callback',
        component: OktaCallbackComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
