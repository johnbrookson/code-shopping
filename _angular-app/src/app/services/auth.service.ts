import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Credentials, User} from "../models";
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";

const TOKEN_KEY = 'code_shopping_token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    logged: boolean = false;

    me: User = null;

    constructor(private http: HttpClient) {
        const token = this.getToken();
        this.setUserFromToken(token);
    }

    login(credentials: Credentials): Observable<{ token: string }> {
        return this.http
            .post<{ token: string }>(`${environment.api.url}/login`, credentials)
            .pipe(
                tap(response => {
                    this.setToken(response.token)
                })
            );
    }

    setToken(token: string) {
        this.setUserFromToken(token);
        token ? window.localStorage.setItem(TOKEN_KEY, token) : window.localStorage.removeItem(TOKEN_KEY);
    }

    private setUserFromToken(token: string) {
        const decodedPpayload = new JwtHelperService().decodeToken(token);
        this.me = decodedPpayload ? {
            id: decodedPpayload.sub,
            name: decodedPpayload.name,
            email: decodedPpayload.email
        }: null;
    }

    getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    isAuth(): boolean {
        const token = this.getToken();
        return ! new JwtHelperService().isTokenExpired(token, 30);
    }

    logout(): Observable<any> {
        return this.http
            .post<{ token: string }>(`${environment.api.url}/logout`, {})
            .pipe(
                tap(() => {
                    this.setToken(null)
                })
            );
    }


}
