import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Profile } from '../user/profile';
import { ProfileTrackerError } from '../user/profileTrackerError';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent implements OnInit{
  user!: Profile;
  allProfiles!: Profile[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    let resolvedData: Profile[] | ProfileTrackerError = this.route.snapshot.data['resolvedProfiles'];

    if (resolvedData instanceof ProfileTrackerError) {
      console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
    }
    else {
      this.allProfiles = resolvedData;
    }

    // console.log("getting profiles");
    // this.allProfiles = this.dataService.getAllProfiles();
    // console.log(this.allProfiles);
  }
}
