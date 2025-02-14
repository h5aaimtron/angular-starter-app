import { HttpClient } from '@angular/common/http';
import { Component, Input, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-people',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-people.component.html',
  styleUrl: './edit-people.component.css'
})
export class EditPeopleComponent {
  @Input()
  public person: any = {
    id: 0,
    fname: "",
    lname: "",
    homeworld: "",
    age: 0
  };

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    let id = this.route.snapshot.params['id'];
    if(id) {
      this.person.id = id;
      this.loadPerson();
    }
   }

   /**
    * Load the person if they already exist.
    */
   private loadPerson(): void {
    this.httpClient.get(environment.apiBaseUrl + "people/" + this.person.id).subscribe({
      next: (response: any) => {
        this.person = response.data;
      },
      error: (error) => {
        console.error(error);
        alert(error.data.message);
      }
    })
   }

  public cancel(): void {
    // Navigate back to the people page.
    this.router.navigate(['people']);
  }

  /**
   * Handles the submit of the form.
   */
  public submit(): void {
    if (this.person.id > 0) {
      // Update the user if they are existing.
      this.httpClient.put(environment.apiBaseUrl + "people/" + this.person.id, this.person).subscribe({
        next: (response: any) => {
          // Navigate back to the people page.
          this.router.navigate(['people']);
        },
        error: (error) => {
          console.error(error);
          alert(error.data.message);
        }
      });
    } else {
      // Add the user if they are new.
      this.httpClient.post(environment.apiBaseUrl + "people", this.person).subscribe({
        next: (response: any) => {
          this.router.navigate(['people']);
        },
        error: (error) => {
          console.error(error);
          alert(error.data.message);
        }
      })
    }
  }

}
