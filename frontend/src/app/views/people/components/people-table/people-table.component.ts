import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './people-table.component.html',
  styleUrl: './people-table.component.css'
})
export class PeopleTableComponent implements OnInit {
  public people: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  /**
   * Load people into table.
   */
  private loadPeople(): void {
    this.httpClient.get(environment.apiBaseUrl + "people").subscribe({
      next: (response: any) => {
        // Set the people list.
        this.people = response.data;
      },
      error: (error) => {
        console.error(error)
        alert(error.data.message);
      }
    });
  }

  /**
   * Delete a person from the database.
   * @param index 
   */
  public delete(personId: number): void {
    this.httpClient.delete(environment.apiBaseUrl + "people/" + personId).subscribe({
      next: (response) => {
        // Reload the people.
        this.loadPeople();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
