import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductivityAppsModule } from './productivity-apps/productivity-apps.module';
import { UserModule } from './user/user.module';
import { ClientsModule } from './clients/clients.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ProductivityAppsModule,
        ClientsModule,
        UserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
