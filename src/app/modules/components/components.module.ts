import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBasicComponent } from 'src/app/components/input-basic/input-basic.component';
import { ModalBasicComponent } from 'src/app/components/modal-basic/modal-basic.component';
import { NavigationBasicComponent } from 'src/app/components/navigation-basic/navigation-basic.component';

// this module since it is just the components template
// it only uses declarations array to be able to export then in
// exports array, other modulels shall use this module as import

@NgModule({
  declarations: [
    InputBasicComponent,
    ModalBasicComponent,
    NavigationBasicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputBasicComponent,
    ModalBasicComponent,
    NavigationBasicComponent
  ]
})
export class ComponentsModule { }
