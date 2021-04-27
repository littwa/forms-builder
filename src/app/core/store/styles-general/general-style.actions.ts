import { Action } from '@ngrx/store';

export enum ActionStyleGeneral {
  AddStyleGeneral = '[Style] general add',
  GetStyleGeneral = '[Style] general get',
  ClearStyleGeneral = '[Style] general clear',
  ChangeStyleGeneral = '[Style] general change',
}

export class AddStyleGeneralAction implements Action {
  readonly type = ActionStyleGeneral.AddStyleGeneral;
  constructor(public payload: any) {}
}
export class GetStyleGeneralAction implements Action {
  readonly type = ActionStyleGeneral.GetStyleGeneral;
  constructor(public payload: any) {}
}
export class ClearStyleGeneralAction implements Action {
  readonly type = ActionStyleGeneral.ClearStyleGeneral;
  constructor(public payload: any) {}
}
export class ChangeStyleGeneralAction implements Action {
  readonly type = ActionStyleGeneral.ChangeStyleGeneral;
  constructor(public payload: any) {}
}

export type TypesActionGeneralStyle =
  | AddStyleGeneralAction
  | GetStyleGeneralAction
  | ClearStyleGeneralAction
  | ChangeStyleGeneralAction;
