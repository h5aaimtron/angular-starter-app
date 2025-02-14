import { Component } from '@angular/core';
import { PeopleTableComponent } from "./components/people-table/people-table.component";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [PeopleTableComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

}
