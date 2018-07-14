import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AuthLayoutComponent} from './components/pages/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './components/pages/admin-layout/admin-layout.component';
import {AppRoutes} from "./app.routing";
import {ModalModule} from "./components/bootstrap/modal/modal.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent,
        AdminLayoutComponent,


    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes, {enableTracing: false}),
        ModalModule


    ],
    exports: [],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
