import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule
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
    ViserModule
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
    
  ]
})
export class SharedModule { }
