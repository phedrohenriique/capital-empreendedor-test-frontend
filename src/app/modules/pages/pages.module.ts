import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';
import { UsersPageComponent } from 'src/app/pages/users/users-page.component';
import { ProductsPageComponent } from 'src/app/pages/products/products-page.component';



@NgModule({

  // the declarations are where the the things that belong to those modules
  // each module can have one declaration (component, pipe or service), and
  // they can't be declared in more than one module.

  declarations: [
    HomePageComponent,
    UsersPageComponent,
    ProductsPageComponent
  ],

  // in the imports array all the exported variables used in other modules,
  // are accessed through te pages module ( or any other module feature )

  imports: [
    CommonModule,
    ComponentsModule
  ],

  // list of avaiable modules that can be used for other modules in the application
  // the need to be exported in order to be used

  exports: [
    HomePageComponent,
    UsersPageComponent,
    ProductsPageComponent
  ]
})
export class PagesModule { }
