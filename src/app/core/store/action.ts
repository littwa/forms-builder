import { Action } from '@ngrx/store';

import { User, Error } from '../interfaces';

export enum AuthActionTypes {
  LoginRequest = '[App] Login request',
  LoginSuccess = '[App] Login success',
  LoginFailed = '[App] Login failed',
  RegisterRequest = '[App] Register request',
  RegisterSuccess = '[App] Register success',
  RegisterFailed = '[App] Register failed',
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginRequest;
  constructor(public payload: User) {}
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: User) {}
}

export class LoginFailedAction implements Action {
  readonly type = AuthActionTypes.LoginFailed;
  constructor(public payload: Error) {}
}

//==========================Register=====

export class RegisterAction implements Action {
  readonly type = AuthActionTypes.RegisterRequest;
  constructor(public payload) {}
}

export class RegisterSuccessAction implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;
  constructor(public payload) {}
}

export class RegisterFailedAction implements Action {
  readonly type = AuthActionTypes.RegisterFailed;
  constructor(public payload) {}
}

export type Actions =
  | LoginAction
  | LoginSuccessAction
  | LoginFailedAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterFailedAction;
