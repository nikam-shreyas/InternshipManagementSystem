import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatTableModule } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {
  Docs = [
    { id: 1, name: "doc1", status: "Progressing", remark: "_" },
    { id: 2, name: "doc2", status: "Progressing", remark: "_" }
  ];
  TeacherName:string="";
  TeacherDesignation:string="";
  TeacherSubject:string="";
  TeacherDepartment:string="";
  PhoneNo:string="";
  EmailId:string="";
  constructor(private router: Router) {

  }
  updateProfile(){
  this.TeacherName="XYZ";
  this.TeacherDepartment="Computer";
  this.TeacherDesignation="ABC";
  this.TeacherSubject="LMN";
  this.PhoneNo="9158033533";
  this.EmailId="nik4m.5hreyas@gmail.com";
  }
  ngOnInit() {
    this.updateProfile();

  }
  logOut() {
    this.router.navigate(['login-page']);
  }
}
