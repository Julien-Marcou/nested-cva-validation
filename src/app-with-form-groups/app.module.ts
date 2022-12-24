import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonFormArrayComponent } from './components/person-form-array/person-form-array.component';
import { PersonFormGroupComponent } from './components/person-form-group/person-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormArrayComponent,
    PersonFormGroupComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
