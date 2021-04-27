import { Injectable } from '@angular/core';
import * as jwtEncode from 'jwt-encode';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../core/interfaces';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  constructor(private http: HttpClient) {}

  getUser(action): Observable<boolean | User> {
    return this.http.get(`http://localhost:3000/users`).pipe(
      map((users: Array<User>) => {
        let user = users.find(
          (el) => el.email === action.email && el.password === action.password
        );

        if (!user) {
          return false;
        }

        const token = this.createToken(user);
        localStorage.setItem('token', JSON.stringify(token));

        return { email: user.email, password: user.password, token };

      })
    );
  }

  createToken(obj): string {
    return jwtEncode(obj, 'sekret');
  }

  registerUserRequest(credentials): Observable<object> {
    return this.http.post('http://localhost:3000/users', credentials);
  }
}
