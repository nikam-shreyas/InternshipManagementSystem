import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';


const routes: Routes = [
  { path: 'teacher-profile', component: TeacherProfileComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'status-info-table', component: TableExampleComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: '', component: LoginPageComponent },
  { path: 'student-profile', component: StudentProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
