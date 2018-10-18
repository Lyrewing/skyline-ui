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
import { MultiplePipe } from '../pipes/multiple.pipe';
import { EditorComponent } from './editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorMdDirective } from './editor/editor-md.directive';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, VotesComponent, ChartComponent, GuideComponent,AddBookDialog, ConsultComponent, MultiplePipe, EditorComponent,EditorMdDirective],
  entryComponents:[
    AddBookDialog
  ],
})
export class ProjectsModule { }
