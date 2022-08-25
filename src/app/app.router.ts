import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsPageComponent } from "./pages/products/products-page.component";
import { UsersPageComponent } from "./pages/users/users-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'users',
        component: UsersPageComponent
    },
    {
        path: 'products',
        component: ProductsPageComponent
    },
]


export const router: ModuleWithProviders<{}> = RouterModule.forRoot(APP_ROUTES)