import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  CreateProfile() {
    this.router.navigate(['./student-profile']);
  }
}
