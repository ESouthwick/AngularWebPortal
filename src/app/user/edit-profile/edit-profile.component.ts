import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profile!: Profile;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    // private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null){
    this.dataService.getProfilebyId(id)
      .subscribe(profile => this.profile = profile);
    }
    else{
      console.log('Profile does not exist.');
    }
  }

  onSubmit({ id, username, firstName, lastName, email }: {
    id: number; username: string, firstName: string, lastName: string, email: string
  }): void {
    // this.openSnackBar('Profile Successfully Updated')
    this.dataService.editProfile(id, username, firstName, lastName, email)
      .subscribe(() => {
        this.router.navigateByUrl('/user/profile');
      });
  }

  // openSnackBar(message: string) {
  //   this._snackBar.open(message);
  //   this._snackBar.dismiss();
  // }
}
