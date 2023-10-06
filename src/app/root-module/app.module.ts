import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'core';
import { AuthComponent } from 'auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule,
    AuthComponent,
    NxWelcomeComponent,
  ],
  providers: [],
})
export class RootModule {}
