
import { Component, OnInit, Input,  } from '@angular/core';
import { NgxCrudMocksService, CrudService } from 'ngx-crud-mocks';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SearchComboBoxGenericModel } from 'ngx-academia-uniandes-library';
import { CriteriaModel } from '../criteria.model';
import { CriteriaService } from '../criteria.service';
import { CriteriaComponent } from '../criteria.component';
import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert2'
import { criteriaMockFormat } from '../../../../assets/mocks-helpers/criteriaMockFormat';






@Component({
  selector: 'app-criteria-crud-detail',
  templateUrl: './criteria-detail.component.html',
  styleUrls: ['./criteria-detail.component.scss'],
providers:[{provide: CrudService, useClass: NgxCrudMocksService }]  
})
export class CriteriaDetailComponent implements OnInit {


  @Input() criteriaFromParent:CriteriaModel;
  private formGroupStep1: FormGroup;
  
  private currentId: number;
  private criteria: CriteriaModel = new CriteriaModel();
  private isEditForm: boolean = false;  
  
  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private criteriaService: CrudService, private location: Location, private translate: TranslateService) {
	this.formGroupStep1 = this._formBuilder.group({
		nameCtrl: ['', Validators.compose([Validators.required])]  
    });
 
    
		this.criteriaService.setConfigMock(criteriaMockFormat,'criterias');
  }
  

  ngOnChanges(){
    if(this.criteriaFromParent){
      this.criteria = this.criteriaFromParent;
      this.isEditForm = true;
    }
  }
  
  ngOnInit() {
    this.currentId = Number(this.route.snapshot.params['id']);
    if(this.currentId) { 
    	this.getCriteriaById(this.currentId); 
    	this.isEditForm = true;
    }       
  }
  
  
  
  getCriteriaById(id: number){
    this.criteriaService.getById(id).subscribe(data => this.criteria = data), 
    error => {
      console.error(error);
    };
  }

  saveCriteria(criteria: CriteriaModel) {
    console.log(criteria);
    this.criteriaService.save(criteria).subscribe(success => {
      console.info(success);
      this.translate.get('successSave').subscribe((res: string) => { swal('Ok!',res,'success') });   
    }, error => {
      console.error(error);
      this.translate.get('errorSave').subscribe((res: string) => { swal('Oups!',res,'error') });    
    }); 
  }
  
  goBack(){
    this.location.back();
  }


}