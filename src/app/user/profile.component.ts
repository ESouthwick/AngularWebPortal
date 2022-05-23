import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Profile } from './profile';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profiles: Profile[] = [];
  // snackDuration = 5;

  constructor(
    // private _snackBar: MatSnackBar,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.dataService.getProfiles()
      .subscribe(profiles => this.profiles = profiles);
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
