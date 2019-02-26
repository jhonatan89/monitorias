import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardViewComponent } from './dash-board-view.component';
import {  CriteriaComponent  } from './';
import { CriteriaListComponent, CriteriaDetailComponent, CriteriaService, LocatorCriteriaService } from './criteria';
import { MenuFormComponent, MenuFormService } from './menu-form';



	


import { SharedModule } from '../shared/shared.module';

export const routes: Routes = [
  {path: '', redirectTo: 'criteria/list', pathMatch: 'full' },
  
  {path: 'criteria', component:CriteriaComponent, children:[
	  {path:'list', component:CriteriaListComponent},
	  {path:'edit/:id', component:CriteriaDetailComponent},
	  {path:'create', component:CriteriaDetailComponent}]
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
	DashBoardViewComponent, 
 
	CriteriaComponent,CriteriaListComponent, CriteriaDetailComponent 
,
	MenuFormComponent
],
  providers: [ 
	CriteriaService, LocatorCriteriaService ,
,MenuFormService ],
	exports:[	CriteriaComponent, CriteriaListComponent, CriteriaDetailComponent 
]
})
export class DashBoardViewModule { }

