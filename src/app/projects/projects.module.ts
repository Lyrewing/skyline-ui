import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VotesComponent, AddBookDialog } from './votes/votes.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, VotesComponent,AddBookDialog, ChartComponent],
  entryComponents:[
    AddBookDialog
  ]
})
export class ProjectsModule { }
