import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Credentials} from "../../models";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    logged: boolean = false;

    constructor(private http: HttpClient) {
    }

    login(credentials: Credentials) {
        return this.http.post<any>('http://localhost:8000/api/login', credentials);
    }


}
