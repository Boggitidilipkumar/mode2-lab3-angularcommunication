import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child/child.component';
import { Mod1Module } from './mod1/mod1.module';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,Mod1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
