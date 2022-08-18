import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { router } from './app.router';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SingleFileComponent } from './single-file/single-file.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { DatabaseService } from './services/database.service';
import { HomePageComponent } from './pages/home/home-page.component';
import { ClientPageComponent } from './pages/clients/client-page.component';
import { ProductsPageComponent } from './pages/products/products-page.component';

// page componentes shall be used as import modules for
// a better code visualization and understanding

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    NavigationMenuComponent,
    SingleFileComponent,
    ModalBasicComponent,
    HomePageComponent,
    ClientPageComponent,
    ProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    router
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
