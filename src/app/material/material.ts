import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatButtonToggleModule,
  MatIconModule,
  MatFormFieldModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatSelectModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatTabsModule,
  MatCardModule,
  MatTableModule,
  MatExpansionModule,
  MatStepperModule
} from '@angular/material';

const MaterialModuleComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatSelectModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatSidenavModule, 
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatTableModule,
  MatStepperModule
]

@NgModule({
  imports: [MaterialModuleComponents],
  exports: [MaterialModuleComponents]
})
export class Material { }