import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { router } from './app.router';

// it is important to organize the whole application in modules
// so the code stays clean and readable, it can be done in the
// NgModule() class within the root 

import { AppComponent } from './app.component';
import { ClientsModule } from './modules/clients/clients.module';
import { ProductsModule } from './modules/products/products.module';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DatabaseService } from './services/database.service';

// page componentes shall be used as import modules for
// a better code visualization and understanding

@NgModule({
  declarations: [

    // components, directives, pipes

    AppComponent,
    NavigationMenuComponent,
  ],
  imports: [

    // other modules that we shall be using
    // they can be used inside other components

    BrowserModule,
    FormsModule,
    HttpClientModule,
    router,
    ClientsModule,
    ProductsModule
  ],
  providers: [

    // global application scope, all services that
    // can be used in the whole application

    DatabaseService
  ],
  bootstrap: [AppComponent] // root component that shall be executed by the application (SPA)
})
export class AppModule { }
