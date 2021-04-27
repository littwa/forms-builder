import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnyPippe } from './pipe/any-pipe';
import { reducers } from './core/store/index'; //metaReducers
import { environment } from '../environments/environment';
import { Effects } from './core/store/effects';
import { EffectsSteleFields } from './core/store/styles-fields/effects';
import { SharedModule } from './shared/shared.module';
import { StylePanelComponent } from './style-panel/style-panel.component';
import { AuthModule } from './views/auth/auth.module'
import { RegisterModule } from './views/register/register.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnyPippe,
    StylePanelComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([Effects, EffectsSteleFields]),
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatExpansionModule,
    SharedModule,
    AuthModule,
    RegisterModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
