import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthenticationRoutes} from "./authentication.routing";
import {AlertErrorComponent} from "../../bootstrap/alert-error/alert-error.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthenticationRoutes),
        FormsModule,
    ],
    declarations: [LoginComponent,  AlertErrorComponent,]
})

export class AuthenticationModule {}
