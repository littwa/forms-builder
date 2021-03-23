import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { stylesSheet_Input } from '../../shared/style.sheets';
import { valueDefault } from '../../shared/value.sheets';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() stylesSheet_Input = stylesSheet_Input;
  @Input() actualValue = { ...valueDefault };

  //===========ControlValueAccessor==============================

  _value: any = '';

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
