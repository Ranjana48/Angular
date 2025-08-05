import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'about', component: about },
  { path: 'contact', component: Contact },
];
