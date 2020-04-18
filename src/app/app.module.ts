import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Material } from './material/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatButtonModule } from '@angular/material';
import { AlertModule } from 'ngx-bootstrap';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { CreateTeacherProfileComponent } from './create-teacher-profile/create-teacher-profile.component';
import { EditStudentProfileDialogComponent } from './edit-student-profile-dialog/edit-student-profile-dialog.component';
import { FormsModule } from "@angular/forms";
import { WallpaperComponent } from './wallpaper/wallpaper.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StudentProfileComponent,
    TableExampleComponent,
    CreateProfileComponent,
    TeacherProfileComponent,
    CreateTeacherProfileComponent,
    EditStudentProfileDialogComponent,
    WallpaperComponent
  ],
  imports: [
    AlertModule.forRoot(),
    FormsModule,
    BrowserModule,
    Material,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    EditStudentProfileDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
