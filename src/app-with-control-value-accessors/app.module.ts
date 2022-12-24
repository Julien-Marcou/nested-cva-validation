import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonCvaComponent } from './components/person-cva/person-cva.component';
import { PersonListCvaComponent } from './components/person-list-cva/person-list-cva.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCvaComponent,
    PersonListCvaComponent,
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
