import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ReactiveComponentModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ReactiveComponentModule],
})
export class SharedModule {}
