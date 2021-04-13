import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './views/auth/auth.component';
import { RegisterComponent } from './views/register/register-component';
import { AuthGuard } from './auth.guard';
import { HttClientComponent } from './views/http-client/http-client.component'

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'sdk', canActivate: [AuthGuard], loadChildren: ()=> import('./cdk-portal/cdk-portal.module').then(m=>m.CdkPortalModule) },
  { path: 'sdk', loadChildren: ()=> import('./views/cdk-portal/cdk-portal.module').then(m=>m.CdkPortalModule) },
  { path: 'http-client', component: HttClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



