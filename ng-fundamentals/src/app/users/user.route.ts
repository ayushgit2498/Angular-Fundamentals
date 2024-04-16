import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

export const userRoutes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
