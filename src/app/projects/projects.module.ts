import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VotesComponent } from './votes/votes.component';
import { ChartComponent } from './chart/chart.component';
import { GuideComponent } from './guide/guide.component';
import { AddBookDialog } from '../modals/add-modal.component';
import { ConsultComponent } from './consult/consult.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,

  ],
  declarations: [HomeComponent, VotesComponent, ChartComponent, GuideComponent,AddBookDialog, ConsultComponent],
  entryComponents:[
    AddBookDialog
  ],
})
export class ProjectsModule { }
