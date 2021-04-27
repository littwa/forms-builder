import { ActionStyleField, ActionStyle } from './styleFields.actions';

const INIT_STATE_STYLE_UPDATE = [];

export const reduserStyle = (
  state = INIT_STATE_STYLE_UPDATE,
  action: ActionStyle
) => {
  switch (action.type) {
    case ActionStyleField.AddStyle:
      return [...state, action.payload];

    case ActionStyleField.ChangeStyle:
      return [...state].map((el) => {
        const { data, currentValue, nameInput } = action.payload;
        const newValue = { ...currentValue };
        const elementNameInput = el[0];

        if (elementNameInput !== nameInput) {
          return el;
        }

        if (nameInput.split('-')[0] !== 'select') {
          return [elementNameInput, data, currentValue];
        }

        const sel = [...el[2].select];
        if (!currentValue.select[0]) {
          newValue.select = sel;
          return [elementNameInput, data, newValue];
        }

        sel.push(currentValue.select);
        newValue.select = sel;
        return [elementNameInput, data, newValue];
      });

    case ActionStyleField.RemoveStyle:

      let withoutFieldState = [...state].filter(
        (el) => el[0] !== action.payload
      );
      console.log('state--', withoutFieldState);
      return withoutFieldState;
    default:
      return state;
  }
};

export const getStyle = (state) => state;
