import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitHubComponent } from './components/github.component';
@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
