import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PeopleComponent } from './views/people/people.component';
import { EditPeopleComponent } from './views/people/components/edit-people/edit-people.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'people/edit', component: EditPeopleComponent },
    { path: 'people/edit/:id', component: EditPeopleComponent }
];
