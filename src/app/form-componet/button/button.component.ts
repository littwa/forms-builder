import {
  Component,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter,
  OnInit,
  Input,
} from '@angular/core';

import { stylesSheetBtn } from '../../shared/style.sheets';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponet implements OnInit {
  @ViewChild('btn') btnRef: ElementRef<HTMLButtonElement>;
  @Input() isDrop: boolean;
  @Output() stylesSheetBtnCH = new EventEmitter();
  @Input() stylesSheetBtn = stylesSheetBtn;
  @Input() getValueForm: Function;


  ngOnInit() {
    this.stylesSheetBtnCH.emit(this.stylesSheetBtn);
  }

  clickButton(e): void {
    this.getValueForm();
  }
}
