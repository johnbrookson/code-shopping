import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AuthLayoutComponent} from './components/pages/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './components/pages/admin-layout/admin-layout.component';
import {AppRoutes} from "./app.routing";
import {ModalModule} from "./components/bootstrap/modal/modal.module";
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";
import {AuthService} from "./services/auth.service";
import {RefreshTokenInterceptorService} from "./services/refresh-token-interceptor.service";

function jwtFactory(authService: AuthService) {
    return {
        whitelistedDomains: [
            new RegExp('localhost:8000/*')
        ],
        tokenGetter: () => {
            return authService.getToken();
        }

    }
}

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
        ModalModule,
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtFactory,
                deps: [AuthService]
            }
        })


    ],
    exports: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RefreshTokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
