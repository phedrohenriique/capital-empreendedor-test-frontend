import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { router } from './app.router';

// it is important to organize the whole application in modules
// so the code stays clean and readable, it can be done in the
// NgModule() class within the root 

import { AppComponent } from './app.component';
import { DatabaseService } from './services/database.service';
import { PagesModule } from './modules/pages/pages.module';
import { ComponentsModule } from './modules/components/components.module';

// page componentes shall be used as import modules for
// a better code visualization and understanding

@NgModule({
  declarations: [

    // components, directives, pipes

    AppComponent

  ],
  imports: [

    // other modules that we shall be using
    // they can be used inside other components

    BrowserModule,
    FormsModule,
    HttpClientModule,
    router,
    PagesModule,
    ComponentsModule

  ],
  providers: [

    // global application scope, all services that
    // can be used in the whole application

    DatabaseService
  ],
  bootstrap: [AppComponent] // root component that shall be executed by the application (SPA)
})
export class AppModule { }
