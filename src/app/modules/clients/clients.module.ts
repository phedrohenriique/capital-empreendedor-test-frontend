import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';
import { ClientPageComponent } from 'src/app/pages/clients/client-page.component';
import { ModalBasicComponent } from 'src/app/components/modal-basic/modal-basic.component';


// declarations shall be all components used to  create that module
// exports i can declare the components and make them re-usable
// when they are used in root, they can be re-used already

@NgModule({
  declarations: [
    UserCardComponent,
    UserListComponent,
    ClientPageComponent,
    ModalBasicComponent
  ],
  imports: [
    CommonModule,
  ],

  // everything inside exports will be able to be used by other
  // components or the entire application

  exports: [
    UserCardComponent,
    UserListComponent,
    ClientPageComponent
  ]
})
export class ClientsModule {

}
