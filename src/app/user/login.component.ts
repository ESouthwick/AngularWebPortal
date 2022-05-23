import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private authService:AuthService,
  ) { }

  ngOnInit() {
    // this.navShow = false;
    this.loginForm = this.fb.group({
      userName: ['',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
    this.authService.loadAll();
  }



  login(){
    console.log(this.loginForm.value);

    if(this.authService.loginUser(this.loginForm.value['userName'], this.loginForm.value['password'])){
      this.router.navigate(['home']);
    }

  }
}


