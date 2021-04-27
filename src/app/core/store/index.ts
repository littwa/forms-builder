import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCore from './core.reducer';
import * as fromFields from './fields/fields.reducers';
import * as fromStyle from './styles-fields/styleFields.reducers';
import * as fromGeneralStyle from './styles-general/general-style.reducers';

export interface State {
  core: fromCore.State;
  fieldsInput: any;
  styleInput: any;
  reg: any;
  styleGeneral: object;
}

// Map of the reducers

export const reducers: ActionReducerMap<State> = {
  reg: fromCore.reducerRegister,
  core: fromCore.reducer,
  fieldsInput: fromFields.reducerFields,
  styleInput: fromStyle.reduserStyle,
  styleGeneral: fromGeneralStyle.reducerGeneralStyle,
};

//Selectors returns smaller piece of state out of the root state

export const getCoreState = (state: State) => state.core;
export const getFieldsState = (state: State) => state.fieldsInput;
export const getStyleState = (state: State) => state.styleInput;
export const getRegState = (state: State) => state.reg;
export const getGeneralStyleState = (state: State) => state.styleGeneral;

// Selectors from Core module

export const getUser = createSelector(getCoreState, fromCore.getUser);
export const getFields = createSelector(getFieldsState, fromFields.getFields);
export const getStyle = createSelector(getStyleState, fromStyle.getStyle);
export const getReg = createSelector(getRegState, fromCore.getRegister);
export const getGeneralStyle = createSelector(
  getGeneralStyleState,
  fromGeneralStyle.getGeneralStyle
);
