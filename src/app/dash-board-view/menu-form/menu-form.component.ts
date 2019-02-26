
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MenuFormService  } from './menu-form.service';
import { MenuFilterModel } from './menu-filter.model'




@Component({
  selector: 'menu-form-search-filter',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {

  private menuFilterModel: MenuFilterModel = new MenuFilterModel();
  private formGroup: FormGroup;
  private genericSearchModel: any;
  @Output() onSubmitFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private filterService: MenuFormService) { 
    this.formGroup = this._formBuilder.group({
		nameCtrl: ['', Validators.compose([])], 		isActiveCtrl: ['', Validators.compose([])] 
    });
    
    
    
  }

  ngOnInit() {
  }


  saveModel(model: any){
      this.filterService.updateFilterData(model);
  }

  cleanFields(){
    this.formGroup.reset();
    this.menuFilterModel = new MenuFilterModel();
  }




}
