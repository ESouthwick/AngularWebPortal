import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ipservice-page',
  templateUrl: './ipservice.component.html',
  styleUrls: ['./home.component.css']
})
export class IPServiceComponent {

  constructor(
    private route: ActivatedRoute,
  ) {}

 }
