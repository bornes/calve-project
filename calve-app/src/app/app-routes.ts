import { Routes } from "@angular/router";
import { CreateToDoComponent } from "./pages/create-to-do-component/create-to-do.component";
import { ArchiveToDoComponent } from "./pages/archive-to-do/archive-to-do.component";

export const appRoutes: Routes = [
    {
        path: 'create',
        component: CreateToDoComponent,
    },
    {
        path: 'archive',
        component: ArchiveToDoComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create',
    }
];