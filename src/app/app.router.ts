import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsPageComponent } from "./pages/products/products-page.component";
import { ClientPageComponent } from "./pages/clients/client-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { RegisterPageComponent } from "./pages/register/register-page.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'users',
        component: ClientPageComponent
    },
    {
        path: 'products',
        component: ProductsPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    }
]


export const router: ModuleWithProviders<{}> = RouterModule.forRoot(APP_ROUTES)