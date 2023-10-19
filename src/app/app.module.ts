import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { LayoutComponent, NavMenuComponent } from 'layout';
import { RootStoreModule } from 'root-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { NxWelcomeComponent } from './main/nx-welcome.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RootStoreModule,
    AppRoutingModule,
    LayoutComponent,
    NxWelcomeComponent,
    NavMenuComponent,
    PolymorpheusModule,
  ],
  providers: [],
})
export class AppModule {}
