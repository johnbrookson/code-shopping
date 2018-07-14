import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Credentials} from "../../../../models";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials: Credentials = {
        email: 'admin@user.com',
        password: 'secret'
    }

    showMessageError = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.authService.logged = false;
    }

    submit() {
        this.authService.login(this.credentials)
            .subscribe((data) => {
                const token = data.token;
                window.localStorage.setItem('token', token);
                this.authService.logged = true;
                this.router.navigate(['/admin']);

            }, () => this.showMessageError = true);
        return false;
    }

}
