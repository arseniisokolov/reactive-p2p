import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules
import { ModalsModule } from 'core-library/angular/modals/modals.module';

// components
import { PageNotFoundComponent } from 'core-library/angular/components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ModalsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
