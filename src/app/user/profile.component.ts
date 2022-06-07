import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Profile } from './profile';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';




@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  show: boolean = false;
  user!: Profile;
  profiles: Profile[] = [];
  // snackDuration = 5;

  constructor(
    // private _snackBar: MatSnackBar,
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.dataService.getProfiles()
      .subscribe(profiles => this.profiles = profiles);

    this.user = this.authService.currentUser;
    this.show = this.authService.isAdmin();


  }

  onDeleteClicked(profileId: number): void {
    this.dataService.deleteProfile(profileId)
      .subscribe(() => {
        this.profiles = this.profiles.filter(
          profile => profile.id !== profileId
        );
      });
    // this.openSnackBar("Profile Deleted");
  }

  // openSnackBar(message: string) {
  //   this._snackBar.open(message, {duration: (snackDuratoin * 1000) });
  // }
}
