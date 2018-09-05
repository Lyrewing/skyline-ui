import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatCardModule,MatInputModule,MatGridListModule,MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    CommonModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class SharedModule { }
