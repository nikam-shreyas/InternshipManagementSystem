import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-student-profile-dialog',
  templateUrl: './edit-student-profile-dialog.component.html',
  styleUrls: ['./edit-student-profile-dialog.component.css']
})
export class EditStudentProfileDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditStudentProfileDialogComponent>) { }
  StudentName: string = "";
  StudentRollNo: string = "";
  StudentClass: string = "";
  StudentAttendance: string = "";
  StudentCGPA: string = "";
  StudentDepartment: string = "";
  PhoneNo: string = "";
  EmailId: string = "";

  ngOnInit() {
   this.StudentName=this.data.StudentName,
   this.StudentRollNo= this.data.StudentRollNo,
   this.StudentClass= this.data.StudentClass,
   this.StudentAttendance= this.data.StudentAttendance,
   this.StudentCGPA= this.data.StudentCGPA,
   this.StudentDepartment= this.data.StudentDepartment,
   this.PhoneNo= this.data.PhoneNo,
   this.EmailId= this.data.EmailId
  }
  close() {
    this.data = {
      StudentName: this.StudentName,
      StudentRollNo: this.StudentRollNo,
      StudentClass: this.StudentClass,
      StudentAttendance: this.StudentAttendance,
      StudentCGPA: this.StudentCGPA,
      StudentDepartment: this.StudentDepartment,
      PhoneNo: this.PhoneNo,
      EmailId: this.EmailId
    }
    this.dialogRef.close(this.data);
  }
}
