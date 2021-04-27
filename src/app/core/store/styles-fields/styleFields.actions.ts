import { Action } from '@ngrx/store';

export enum ActionStyleField {
  AddStyle = '[Style] add',
  GetStyle = '[Style] get',
  RemoveStyle = '[Style] remove',
  ClearStyle = '[Style] clear',
  ChangeStyle = '[Style] change',
}

export class AddStyleAction implements Action {
  readonly type = ActionStyleField.AddStyle;
  constructor(public payload: any) {}
}

export class GetStyleAction implements Action {
  readonly type = ActionStyleField.GetStyle;
  constructor(public payload: any) {}
}

export class RemoveStyleAction implements Action {
  readonly type = ActionStyleField.RemoveStyle;
  constructor(public payload: any) {}
}

export class ClearStyleAction implements Action {
  readonly type = ActionStyleField.ClearStyle;
  constructor(public payload: any) {}
}

export class ChangeStyleAction implements Action {
  readonly type = ActionStyleField.ChangeStyle;
  constructor(public payload: any) {}
}

export type ActionStyle =
  | AddStyleAction
  | GetStyleAction
  | RemoveStyleAction
  | ClearStyleAction
  | ChangeStyleAction;
