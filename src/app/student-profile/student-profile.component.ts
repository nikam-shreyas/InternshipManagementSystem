import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatTableModule, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { EditStudentProfileDialogComponent } from '../edit-student-profile-dialog/edit-student-profile-dialog.component';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  Docs = [
    { id: 1, name: "doc1", status: "Progressing", remark: "_" },
    { id: 2, name: "doc2", status: "Progressing", remark: "_" }
  ];
  data: any;
  StudentName: string = "";
  StudentRollNo: string = "";
  StudentClass: string = "";
  StudentAttendance: string = "";
  StudentCGPA: string = "";
  StudentDepartment: string = "";
  PhoneNo: string = "";
  EmailId: string = "";
  id:string="";
  constructor(private router: Router, public dialog: MatDialog,private route: ActivatedRoute) {

  }
  updateProfile(StudentName,StudentRollNo,StudentClass,StudentAttendance,StudentCGPA,StudentDepartment,PhoneNo,EmailId) {
    this.StudentName = StudentName
    this.StudentRollNo = StudentRollNo;
    this.StudentClass = StudentClass;
    this.StudentAttendance = StudentAttendance;
    this.StudentCGPA = StudentCGPA;
    this.StudentDepartment =StudentDepartment;
    this.PhoneNo = PhoneNo;
    this.EmailId = EmailId;
  }
  ngOnInit() {
    this.updateProfile("Shreyas","31241","TE","75","9.24","Computer","9158033533","nik4m.5hreyas@gmail.com");
    this.id=this.route.snapshot.paramMap.get('id');
  }
  logOut() {
    this.router.navigate(['login-page']);
  }
  EditInfo() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data={
      StudentName: this.StudentName,
      StudentRollNo: this.StudentRollNo,
      StudentClass: this.StudentClass,
      StudentAttendance: this.StudentAttendance,
      StudentCGPA: this.StudentCGPA,
      StudentDepartment: this.StudentDepartment,
      PhoneNo: this.PhoneNo,
      EmailId: this.EmailId
    }
    const dialogRef = this.dialog.open(EditStudentProfileDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => this.updateProfile(data.StudentName,
        data.StudentRollNo,
        data.StudentClass,
        data.StudentAttendance,
        data.StudentCGPA,
        data.StudentDepartment,
        data.PhoneNo,
        data.EmailId)
  );  
  }
}
