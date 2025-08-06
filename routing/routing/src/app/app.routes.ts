import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
];
