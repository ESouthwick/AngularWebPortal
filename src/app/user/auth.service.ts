import { Injectable, OnInit } from "@angular/core";
import { Profile } from "./profile";
import { DataService } from "../data.service";


@Injectable()
export class AuthService implements OnInit {

  currentUser!: Profile;
  profiles: Profile[] = [];
  loginPassword: string = 'novell';

  constructor(
    private dataService: DataService,
    ) {}

  ngOnInit(): void {

  }

  loadAll(): void {
    this.dataService.getProfiles()
      .subscribe(profiles => this.profiles = profiles);
  }

  loginUser(userName: string, password: string): boolean{
    for(var profile of this.profiles){
      if(profile.username == userName && this.loginPassword == password){
        this.currentUser = profile;
        console.log("User Authenticated");
        // console.log(this.currentUser);
        return true;
      }
    }
    console.log("User Not Authenticated");
    return false;
  }

  isAdmin() {
    if(this.currentUser.username == 'Admin'){
      return true;
    } else{
      return false;
    }
  }
}
