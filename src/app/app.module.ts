import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 904e9fe5fcdb5cea1416cf3fef045ee23a7754f4
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CdkComponent } from './cdk/cdk.component';
import { PortalModule } from '@angular/cdk/portal';
import { CdkPortalComponent } from './cdk-portal/cdk-portal.component';
import { AnyPippe } from './pipe/any-pipe';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormComponent } from './form/form.component';
import { HttClientComponent } from './http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
=======
  declarations: [
    AppComponent,
    CardComponent,
    Card2Component,
    CdkComponent,
    CdkPortalComponent,
    AnyPippe,
    DragComponent,
    FormComponent,
    HttClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    PortalModule,
    DragDropModule,
    HttpClientModule,
  ],
>>>>>>> 904e9fe5fcdb5cea1416cf3fef045ee23a7754f4
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
