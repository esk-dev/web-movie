import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { LayoutComponent, NavMenuComponent } from 'layout';
import { NAVIGATION_PATHS, PATHS } from 'navigation';
import { RootStoreModule } from 'root-store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RootStoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutComponent,
    NxWelcomeComponent,
    NavMenuComponent,
    PolymorpheusModule,
  ],
  providers: [
    {
      provide: PATHS,
      useValue: NAVIGATION_PATHS,
    },
  ],
})
export class AppModule {}
