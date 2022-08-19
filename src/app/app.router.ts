import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsPageComponent } from "./pages/products/products-page.component";
import { ClientPageComponent } from "./pages/clients/client-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'clients',
        component: ClientPageComponent
    },
    {
        path: 'products',
        component: ProductsPageComponent
    }
]


export const router: ModuleWithProviders<{}> = RouterModule.forRoot(APP_ROUTES)