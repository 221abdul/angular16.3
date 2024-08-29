import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'home',
    },

    {
        path: 'signup',
        component: SignupComponent,
        title: 'signup'
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'login'
  },
  {
        path: 'profile',
        component: ProfileComponent,
        title: 'profile'
    },
    {
        path: '**',
        component: HomeComponent,
        redirectTo: '',
    },
];
