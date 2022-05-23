import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vsphere-page',
  templateUrl: './vsphere.component.html',
  styleUrls: ['./home.component.css']
})
export class VSphereComponent {

  constructor(
    private route: ActivatedRoute,
  ) {}

 }
