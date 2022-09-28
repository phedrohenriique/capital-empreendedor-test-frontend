import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBasicComponent } from 'src/app/modules/components/input-basic/input-basic.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { NavigationBasicComponent } from './navigation-basic/navigation-basic.component';
import { ToastSuccessComponent } from './toast-success/toast-success.component';
import { ToastFailureComponent } from './toast-failure/toast-failure.component';
import { ListItemBasicComponent } from './list-item-basic/list-item-basic.component';

// this module since it is just the components template
// it only uses declarations array to be able to export then in
// exports array, other modulels shall use this module as import

@NgModule({
  declarations: [
    InputBasicComponent,
    ModalBasicComponent,
    NavigationBasicComponent,
    ToastSuccessComponent,
    ToastFailureComponent,
    ListItemBasicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputBasicComponent,
    ModalBasicComponent,
    NavigationBasicComponent,
    ToastSuccessComponent,
    ToastFailureComponent,
    ListItemBasicComponent
  ]
})
export class ComponentsModule { }
