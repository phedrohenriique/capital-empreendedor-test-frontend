import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomePageComponent } from './modules/pages/home/home-page.component';
import { ProductsPageComponent } from './modules/pages/products/products-page.component';
import { UsersPageComponent } from './modules/pages/users/users-page.component';

const routes: Routes = [
    {
        path: '',
        component : HomePageComponent
    },
    {
        path:'users',
        component: UsersPageComponent
    },
    {
        path: 'products',
        component: ProductsPageComponent
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }