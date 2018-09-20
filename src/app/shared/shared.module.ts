import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
  
} from '@angular/material';
import {ViserModule} from 'viser-ng'
@NgModule({
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
    ViserModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    CommonModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
    ViserModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule
    
  ]
})
export class SharedModule { }
