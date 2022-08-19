import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequesLogin, IResponseLogin } from 'src/app/models/login.interface';
import { environment } from 'src/environments/environment';

export const LOGIN_USER = `${environment.backendUrl}/Auth/Access`;

@Injectable({providedIn: 'root'})
export class LoginApiService {
    private controller = 'Auth';
    constructor(private _httpClient: HttpClient) { }
    
	login(user: IRequesLogin): Observable<IResponseLogin> {
		return this._httpClient.post<IResponseLogin>(LOGIN_USER, user);
	}

}