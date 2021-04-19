import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';

import { getFields, getGeneralStyle } from '../core/store/index';
import { StyleServices } from '../shared/style.services';
import { getStyle } from '../core/store/index';
import { ChangeStyleAction, RemoveStyleAction } from '../core/store/styles-fields/styleFields.actions';
import { ChangeStyleGeneralAction } from '../core/store/styles-general/general-style.actions';
import { valueDefault } from '../shared/value.sheets';
import { GeneralStyle } from '../core/interfaces';

enum EAttribute {
  Placeholder = 'placeholder',
  Required = 'required',
  SelectValue = 'selectvalue',
  SelectName = 'selectname'
}

@Component({
  selector: 'app-style-panel',
  templateUrl: './style-panel.component.html',
  styleUrls: ['./style-panel.component.scss'],
})
export class StylePanelComponent implements AfterViewInit {
  panelOpenState: boolean;
  fieldsIsRenered: string[];
  constructor(private store: Store, private styleServices: StyleServices) { }
  arrStyleEntreis: any[];
  generalStyle: GeneralStyle;
  subGenStyle: Subscription;
  subStyle: Subscription;

  formGeneralStyle: FormGroup;
  submitFormGeneralStyle(): void {

    this.store.dispatch(
      new ChangeStyleGeneralAction(this.formGeneralStyle.value)
    );

  }

  ngOnInit() {
    this.subGenStyle = this.store.select(getGeneralStyle).subscribe((v) => {

      this.generalStyle = v;
    });

    console.log(999, this.subGenStyle); /////////

    const {
      stylesGeneral: { backgroundColor, height, width, border },
      stylesGeneralInner: { backgroundColor: backgroundColorInner },
    } = this.generalStyle;

    this.formGeneralStyle = new FormGroup({
      stylesGeneral: new FormGroup({
        backgroundColor: new FormControl(backgroundColor),
        height: new FormControl(height),
        width: new FormControl(width),
        border: new FormControl(border),
      }),
      stylesGeneralInner: new FormGroup({
        backgroundColor: new FormControl(backgroundColorInner),
      }),
    });
  }

  delProperty(e, prop) {

    this.styleServices.isRemovedControlService(prop);
    this.store.dispatch(new RemoveStyleAction(prop));
  }

  changeProperty(e, nameInput, formElement) {
    const data: object = {};
    const currentValue: any = { ...valueDefault };
    const formData = new FormData(formElement);
    const arrForSelect: Array<any> = [];

      formData.forEach((value, name) => {
        switch (name) {
          case EAttribute.Required:
          case EAttribute.Placeholder:
            currentValue[name] = value;
            return
          case EAttribute.SelectValue:
          case EAttribute.SelectName:
            arrForSelect.push(value);
            currentValue.select = arrForSelect;
            return
          default:
            data[name] = value;
        }
      });

      this.store.dispatch(
        new ChangeStyleAction({ data, nameInput, currentValue })
      );

  }

  @ViewChildren('formnative') formnative;

  objectEntriesStyles(v) {
    return Object.entries(v);
  }

  ngAfterViewInit() {
    this.subStyle = this.store.select(getStyle).subscribe((v) => {
      this.arrStyleEntreis = v;
    });

  }
  ngOnDestroy() {
    this.subGenStyle.unsubscribe()
    this.subStyle.unsubscribe()
  }

}
