import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'redhat-page',
  templateUrl: './redhat.component.html',
  styleUrls: ['./home.component.css']
})
export class RedHatComponent {

  constructor(
    private route: ActivatedRoute,
  ) {}

 }
