import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AboutContent } from './about-content/about-content';
import { AppHomeContent } from './app-home-content/app-home-content';
import { ContactContent } from './contact-content/contact-content';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    AppHomeContent,
    ContactContent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AboutContent
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
