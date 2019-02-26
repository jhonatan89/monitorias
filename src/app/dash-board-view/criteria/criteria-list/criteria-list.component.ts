import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { NgxCrudMocksService, CrudService } from 'ngx-crud-mocks';
import swal from 'sweetalert2'
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {zip} from "rxjs/observable/zip";
import { CriteriaModel } from '../criteria.model';
import { CriteriaService } from '../criteria.service';
import { criteriaMockFormat } from '../../../../assets/mocks-helpers/criteriaMockFormat';



@Component({
  selector: 'app-criteria-crud-list',
  templateUrl: './criteria-list-gallery.component.html',
  styleUrls: ['./criteria-list.component.scss'],
providers:[{provide: CrudService, useClass: NgxCrudMocksService}]  
})
export class CriteriaListComponent implements OnInit, OnChanges {
  
  private criterias:any;
  private start: number = 0;
  private totalRecords: number;
  private page: number = 1;
  private pageSize: number = 8;
  private isFetchFinish: boolean = false;
  private urlParams: any;
  private searchParams: any = {};

  @Input() isOnlyRead: boolean = false;
  @Input() filtersFetch: any;
  @Input() criteriaInputItems : CriteriaModel[];
  @Output() criteriaOutputItems: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>(); 
  
  
  
  constructor(private criteriaService : CrudService, 
	  private translate: TranslateService,
	  private route: ActivatedRoute,
	  private router: Router,	  ){ 
this.criteriaService.setConfigMock(criteriaMockFormat,'criterias');	  }
	
  ngOnInit() {
    this.route.queryParamMap.subscribe(paramsMap => {
      	this.urlParams = paramsMap;
        this.page = this.urlParams.params.page ? Number(this.urlParams.params.page) : 1;
        this.start = this.page * this.pageSize - this.pageSize;
        this.renderItems();
    });    
  }
  ngOnChanges(){
    if(this.criteriaInputItems){
      this.criterias = this.criteriaInputItems;
      this.isOnlyRead = true;
    }else {
      this.renderItems();
    }
  }


  getCriterias(start: number, pageSize: number, searchParams?: any){
    this.isFetchFinish = false;
    this.criteriaService.search(start, pageSize,searchParams).subscribe(data => { 
      this.criterias = data; 
      this.criteriaOutputItems.emit(this.criterias);
      this.isFetchFinish = true;
    },
    error => {
      console.error(error);
      this.isFetchFinish = true;
    })
  }
  
  deleteCriteria(id: number){
    this.criteriaService.deleteById(id).subscribe(result => { 
    this.translate.get('successDelete').subscribe((res: string) => { swal('Ok!',res,'success') });
    this.deleteItem.emit(id);
    this.renderItems();         
    },
     error => {
       console.error(error);
       this.translate.get('errorDelete').subscribe((res: string) => { swal('Error!',res,'error') });   
     });
  }
  

  getCriteriaNum(searchParams?: any){
    this.criteriaService.getNumTotal(searchParams).subscribe(num => this.totalRecords = num, error => console.log(error));
  }
  
  
  private pageChanged(obj: any){
    this.start = obj.page * obj.pageSize - obj.pageSize;
    this.page = obj.page;
    this.pageSize = obj.pageSize;
    this.router.navigate([], { queryParams: { page: this.page}});
  }
  
  
  
  private renderItems(){
  	this.getCriterias(this.start, this.pageSize, this.searchParams);
    this.getCriteriaNum(this.searchParams);
  }
  
  private resetPage(){
  	this.page = 1;
  }
  

  goToEdit(item: any){
    this.router.navigate(['../edit', item.id], { relativeTo: this.route });    
  }
  
  confirmDelete(id: number){
    let titleObs = this.translate.get('areYouSure');
    let textObs = this.translate.get('noRevert');
    let confirmButtonTextObs = this.translate.get('yesDelete');

    zip(titleObs, textObs, confirmButtonTextObs).subscribe( ([title, text, confText]) => {
      swal({
        title: title,
        text: text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#868e96',
        confirmButtonText: confText
      }).then((result) => {
        if (result.value) {
          this.deleteCriteria(id);
        }
      })
    });
    
  }
  
  





}

