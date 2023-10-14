import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutComponent } from "layout";
import { RootStoreModule } from "root-store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./main/app.component";
import { NxWelcomeComponent } from "./main/nx-welcome.component";

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
  ],
  providers: [],
})
export class AppModule {}
