import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { VotesComponent } from './votes/votes.component';
import { ChartComponent } from './chart/chart.component';
import { GuideComponent } from './guide/guide.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from '../guards/permission.guard';
import { FocusGuard } from '../guards/focus.guard';
import { GuidResolve } from '../guards/guid.resolve';
import { EditorComponent } from './editor/editor.component';


const routers: Routes = [
    {
        path: 'home', component: HomeComponent, canActivate: [PermissionGuard], children: [
            {
                path: 'guide', component: GuideComponent, canDeactivate: [FocusGuard],
                /*
                resolve:
                {
                    guide: GuidResolve,      
                }
                */
            },
            { path: 'vote', component: VotesComponent },
            { path: 'chart', component: ChartComponent },
            { path: 'consult', component: ConsultComponent, outlet: "aux" },
            {path: 'editor',component: EditorComponent},
        ]
    },
]
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routers)],
    exports: [RouterModule],
    providers: [PermissionGuard, FocusGuard, GuidResolve]
})
export class ProjectsRoutingModule { }