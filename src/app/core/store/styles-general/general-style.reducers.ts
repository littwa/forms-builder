import {
  TypesActionGeneralStyle,
  ActionStyleGeneral,
} from './general-style.actions';

import {
  stylesGeneral,
  stylesGeneralInner,
} from '../../../shared/style.sheets';

const INIT_GENERAL_STYLE_STATE = { stylesGeneral, stylesGeneralInner };

export const reducerGeneralStyle = (
  state = INIT_GENERAL_STYLE_STATE,
  action: TypesActionGeneralStyle
) => {
  switch (action.type) {
    case ActionStyleGeneral.AddStyleGeneral:
      return { ...action.payload };
    case ActionStyleGeneral.ChangeStyleGeneral:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getGeneralStyle = (state) => state;
