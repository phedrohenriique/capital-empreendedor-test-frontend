import { ModuleWithProviders } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";
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
    }
]


export const router: ModuleWithProviders<{}> = RouterModule.forRoot(APP_ROUTES)