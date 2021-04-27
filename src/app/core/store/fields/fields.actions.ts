import { Action } from '@ngrx/store';

export enum ActionTypesFields {
  GetFields = '[Fields] get',
  AddFields = '[Fields] add',
  ClearFields = '[Fields] clear',
  RemoveFields = '[Fields] remove',
}

export class GetFieldsAction implements Action {
  readonly type = ActionTypesFields.GetFields;
  constructor(public payload: any) {}
}

export class AddFieldsAction implements Action {
  readonly type = ActionTypesFields.AddFields;
  constructor(public payload: any) {}
}

export class ClearFieldsActions implements Action {
  readonly type = ActionTypesFields.ClearFields;
  constructor(public payload: any) {}
}

export class RemoveFieldsAction implements Action {
  readonly type = ActionTypesFields.RemoveFields;
  constructor(public payload: any) {}
}

export type ActionsFields =
  | GetFieldsAction
  | AddFieldsAction
  | ClearFieldsActions
  | RemoveFieldsAction;
