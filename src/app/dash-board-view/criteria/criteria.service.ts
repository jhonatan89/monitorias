import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CriteriaModel } from './criteria.model';
import { LocatorCriteriaService } from './criteria-locator.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CriteriaService {

  private headers: HttpHeaders;
  private isEditDetailChanges = new BehaviorSubject<boolean>(false);
  currentDetailState = this.isEditDetailChanges.asObservable();
  private detailState: boolean = false;
  
  constructor(private http: HttpClient, private urlService: LocatorCriteriaService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain'});
  }
  
  save(criteria: CriteriaModel){
    return criteria.id ? this.update(criteria) : this.create(criteria);
  }


  private create(criteria:CriteriaModel){
    let body = JSON.stringify(criteria);
    return this.http.post(this.urlService.getUrlCreate(), body, { headers: this.headers})
      .catch(this.handleError);
  }
	
  private update(criteria:CriteriaModel){
    let body = JSON.stringify(criteria); 
    return this.http.put(this.urlService.getUrlUpdate(), body, { headers: this.headers})
    .catch(this.handleError);
  }
  
  search(start: number, limit: number, searchParams?: string){
    let qParams;
    if(searchParams){
      qParams = searchParams;
      qParams.start = start;
      qParams.limit = limit;
    }else{
      qParams = {"start":start, "limit": limit};
    }
    return this.http.get(this.urlService.getUrlList(),{params : qParams})
    .catch(this.handleError)  
  }
  

  getById(id: number){
    return this.http.get(this.urlService.getUrlGetItem() + '/' + id)
    .catch(this.handleError)
  }



  getNumTotal(searchParams? : any){
     return this.http.get(this.urlService.getUrlListNum(),searchParams? searchParams:{})
     .catch(this.handleError)
  }

  

  deleteById(id: number){
    return this.http.delete(this.urlService.getUrlDeleteItem() + '/' + id, { headers: this.headers})
    .catch(this.handleError)
  }
  
    getAlias(){
    return this.http.get(this.urlService.getAlias())
    .catch(this.handleError)
  }
    
    
  
  private handleError(error: any){ 
    return Observable.throw(error.error || 'Server error');
  }
  
  publishDetailState(detailState: boolean){
    this.detailState = detailState;
    this.isEditDetailChanges.next(this.detailState);
  }


}
