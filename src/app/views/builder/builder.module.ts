import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module"
import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CheckboxComponent } from '../../form-componet/checkbox/checkbox.component';
import { ButtonComponet } from '../../form-componet/button/button.component';
import { InputComponent } from '../../form-componet/input/input.component';
import { TextareaComponent } from '../../form-componet/textarea/textarea.component';
import { SelectComponent } from '../../form-componet/select/select.component';
import { CdkPortalComponent } from './builder.component'
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: "",
  component: CdkPortalComponent
}]

@NgModule({
  declarations: [
    CdkPortalComponent,
    CheckboxComponent,
    ButtonComponet,
    InputComponent,
    TextareaComponent,
    SelectComponent],
  imports: [
    SharedModule,
    DragDropModule,
    PortalModule,
    RouterModule.forChild(routes)

  ],
})
export class BuilderModule { }
