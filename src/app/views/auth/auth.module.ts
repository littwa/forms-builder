import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AuthPageComponent } from './auth.component'

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    SharedModule
  ]
})
export class AuthModule { }
