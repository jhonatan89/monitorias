import { Component, OnInit } from '@angular/core';
import { MenuFormService } from './menu-form/menu-form.service';

@Component({
  selector: 'app-dash-board-view',
  templateUrl: './dash-board-view.component.html',
  styleUrls: ['./dash-board-view.component.scss']
})
export class DashBoardViewComponent implements OnInit{
 
  private hiddenFilter: boolean = false;
  private isLeftIcon: boolean = false;
  
  constructor() { }
 
  
  ngOnInit() {
 
  }
  
  
  sidebarToggle(){
    //document.getElementsByClassName('filter-container')[0].classList.toggle('collapsed');
    //document.getElementsByClassName('container-grid')[0].classList.toggle('collapsed');
  }
    
  collapseForm(state: boolean){
  	if(state){ 
        document.getElementsByClassName('filter-container')[0].classList.toggle('collapsed', true);
        document.getElementsByClassName('container-grid')[0].classList.toggle('collapsed', true);
        this.isLeftIcon = false;
      }
  }

}
