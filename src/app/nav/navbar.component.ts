import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Profile } from '../user/profile';
import { ProfileTrackerError } from '../user/profileTrackerError';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent implements OnInit{
  show: boolean = false;
  user!: Profile;
  allProfiles!: Profile[];

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.authService.currentUser);
    // this.user = this.authService.currentUser;
    // this.show = this.authService.isAdmin();
    // console.log(this.user);

  }
}
