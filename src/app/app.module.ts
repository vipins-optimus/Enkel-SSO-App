import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { OktaAuthModule, OktaAuthService, OktaAuthGuard, OKTA_CONFIG } from '@okta/okta-angular';
import { ProductivityAppsModule } from './productivity-apps/productivity-apps.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ClientsModule } from './clients/clients.module';
import { PageNotFoundComponent } from './page-not-found.component';
import sampleConfig from './.samples.config';
import { SharedModule } from './shared/shared.module';

const oktaConfig = Object.assign({
    onAuthRequired: ({ oktaAuth, router }) => {
        router.navigate(['/login']);
    }
}, sampleConfig.oidc);

@NgModule({
    imports: [
        OktaAuthModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ProductivityAppsModule,
        ClientsModule,
        UserModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [
        {
            provide: OKTA_CONFIG,
            useValue: oktaConfig
        },
        OktaAuthService,
        OktaAuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
