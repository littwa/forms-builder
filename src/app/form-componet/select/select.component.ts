import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { stylesSheetSelect } from '../../shared/style.sheets';
import { valueDefault } from '../../shared/value.sheets';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() stylesSheetSelect = stylesSheetSelect;
  @Input() actualValue = {
    ...valueDefault,
    select: [
      ['value1', 'Value1'],
      ['value2', 'Value2'],
    ],
  };

  //===========ControlValueAccessor==============================
  _value: any = this.actualValue.placeholder;

  @Input()
  set value(value: any) {
    this._value = value;
    this.writeValue(value);
  }

  get value(): any {
    return this._value;
  }

  onChange = (value) => {};

  writeValue(value): void {
    this.onChange(value);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {}
}
