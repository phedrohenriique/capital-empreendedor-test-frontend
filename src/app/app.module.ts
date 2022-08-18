import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SingleFileComponent } from './single-file/single-file.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserListComponent,
    NavigationMenuComponent,
    SingleFileComponent,
    ModalBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
