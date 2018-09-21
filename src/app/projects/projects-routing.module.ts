import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { VotesComponent } from './votes/votes.component';
import { ChartComponent } from './chart/chart.component';
import { GuideComponent } from './guide/guide.component';



const routers: Routes = [
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'guide', component: GuideComponent },
            { path: 'vote', component: VotesComponent },
            { path: 'chart', component: ChartComponent }
        ]
    },



]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routers)],
    exports: [RouterModule],
})
export class ProjectsRoutingModule { }