import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Skills } from './component/skills/skills';
import { Contact } from './component/contact/contact';
import { Project } from './component/project/project';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'me', component: About },
  { path: 'knowledge', component: Skills },
  { path: 'connect', component: Contact },
  { path: 'project3', component: Project },
];
