import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardViewComponent } from './dash-board-view.component';
import {  CriteriaComponent  } from './';
import { CriteriaListComponent, CriteriaDetailComponent, CriteriaService, LocatorCriteriaService } from './criteria';
import { MenuFormComponent, MenuFormService } from './menu-form';
import { SharedModule } from '../shared/shared.module';
import { DateOutlineComponent } from './criteria/date-outline/date-outline.component';

export const routes: Routes = [
  {path: '', redirectTo: 'criteria/list', pathMatch: 'full' },
  
  {path: 'criteria', component:CriteriaComponent, children:[
	  {path:'list', component:CriteriaListComponent},
    {path:'criteriadet', component:CriteriaDetailComponent},
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
     



  ], 
  declarations: [
	DashBoardViewComponent, DateOutlineComponent,
	CriteriaComponent,CriteriaListComponent, CriteriaDetailComponent 
,
	MenuFormComponent,
	DateOutlineComponent
],
  providers: [ 
	CriteriaService, LocatorCriteriaService ,
,MenuFormService ],
	exports:[	CriteriaComponent, CriteriaListComponent, CriteriaDetailComponent 
]
})
export class DashBoardViewModule { }

