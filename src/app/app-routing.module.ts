import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './views/auth/auth.component';
import { RegisterComponent } from './views/register/register-component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sdk', loadChildren: () => import('./views/builder/builder.module').then(m => m.BuilderModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

