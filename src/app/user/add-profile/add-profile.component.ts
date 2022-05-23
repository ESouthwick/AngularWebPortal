import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataService,
    // private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
    }

    nextAvailableId(){

    }

    onSubmit({ id, username, firstName, lastName, email }: {
      id: number; username: string, firstName: string, lastName: string, email: string
      }): void {
      this.dataService.createProfile(id, username, firstName, lastName, email)
        .subscribe(() => {
          this.router.navigateByUrl('/user/profile');
        });
    }

    // openSnackBar(message: string) {
    //   this._snackBar.open(message)
    // }
}
