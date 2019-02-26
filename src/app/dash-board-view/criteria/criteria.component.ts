import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CriteriaModel } from './criteria.model';
import { CriteriaService } from './criteria.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
	

  showDetail: boolean = false;
	
  
  constructor(private criteriaService : CriteriaService, private _router: Router) { 
  	this.setDetailListener();
  }

  ngOnInit() {
  }
  
  

  setDetailListener(){
    this._router.events
    .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
         if(this._router.url.match('/\list$')){
          this.showDetail = false;
         }else{
           this.showDetail = true;
         }
      });
  }
  
  

}
