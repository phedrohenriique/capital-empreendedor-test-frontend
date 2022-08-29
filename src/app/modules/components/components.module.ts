import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBasicComponent } from 'src/app/components/input-basic/input-basic.component';
import { ModalBasicComponent } from 'src/app/components/modal-basic/modal-basic.component';
import { NavigationBasicComponent } from 'src/app/components/navigation-basic/navigation-basic.component';
import { ToastFailureComponent } from 'src/app/components/toast-failure/toast-failure.component';
import { ToastSuccessComponent } from 'src/app/components/toast-success/toast-success.component';
import { ListItemBasicComponent } from 'src/app/components/list-item-basic/list-item-basic.component';

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
