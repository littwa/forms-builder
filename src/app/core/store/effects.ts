import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, switchMap, mergeMap, filter, tap } from 'rxjs/operators';
import { of, from, Observable, iif } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AuthServices } from '../../shared/auth.srevices';
import { User } from '../interfaces';
import {
  AuthActionTypes,
  LoginAction,
  LoginSuccessAction,
  LoginFailedAction,
  RegisterSuccessAction,
} from '../store/action';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private auth: AuthServices
  ) {}

  loginFail(): Observable<LoginFailedAction> {
    return of(
      new LoginFailedAction({
        code: 404,
        message: 'Invalid login',
      })
    )
  }

  onLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActionTypes.LoginRequest),
      map((action: any) => action.payload),
      switchMap((action: any) => this.auth.getUser(action)),
      mergeMap((current: any) => iif(() => current.email, of(new LoginSuccessAction(current)), this.loginFail()))
    )
  }
  );

  $onRegister = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.RegisterRequest),
      map((action: any) => action.payload),
      switchMap((credentials) => {
        return this.auth.registerUserRequest(credentials)
      }),
      mergeMap((user) => {
        return of(new RegisterSuccessAction(user));
      })
    )
  );
}
