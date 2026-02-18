import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter';
import { ListProducts } from './components/list-products/list-products';
import { GithubUsersComponent } from './components/github-users/github-users.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'counter', component: CounterComponent},
  {path: 'products', component: ListProducts},
  {path: 'github', component: GithubUsersComponent},
  {path: 'signup', component: SignupComponent}
];
