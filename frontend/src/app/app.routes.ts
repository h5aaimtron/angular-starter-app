import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PeopleComponent } from './views/people/people.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'people', component: PeopleComponent }
];
