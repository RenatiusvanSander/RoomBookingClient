import {Routes} from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path : 'admin/users',
        component : UsersComponent
    }
];