import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
export const routes: Routes = [
    // Add more routes here...
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];
