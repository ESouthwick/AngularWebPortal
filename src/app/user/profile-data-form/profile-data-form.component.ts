import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-data-form',
  templateUrl: './profile-data-form.component.html',
  styleUrls: ['./profile-data-form.component.css']
})
export class ProfileDataFormComponent implements OnInit {
  @Input() buttonText!: string;
  @Input() currentId!: number;
  @Input() currentUsername!: string;
  @Input() currentFirstName!: string;
  @Input() currentLastName!: string;
  @Input() currentEmail!: string;

  id!: number;
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  @Output() onSubmit = new EventEmitter<Profile>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.currentId;
    this.username = this.currentUsername;
    this.firstName = this.currentFirstName;
    this.lastName = this.currentLastName;
    this.email = this.currentEmail;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: Number(this.id),
      username: this.username,
      userPassword: "",
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    });
  }

}
