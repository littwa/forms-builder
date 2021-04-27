import { ActionTypesFields, ActionsFields } from './fields.actions';

const INIT_STATE_FIELDS = {
  fields: null,
};

export const reducerFields = (
  state = INIT_STATE_FIELDS,
  action: ActionsFields
): any => {
  switch (action.type) {
    case ActionTypesFields.AddFields:
      return { fields: action.payload };
    default:
      return state;
  }
};

export const getFields = (state) => state.fields;
