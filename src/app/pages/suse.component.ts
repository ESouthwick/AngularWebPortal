import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'suse-page',
  templateUrl: './suse.component.html',
  styleUrls: ['./home.component.css']
})
export class SuseComponent {

  constructor(
    private route: ActivatedRoute,
  ) {}

 }
