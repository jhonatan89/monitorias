import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { UtilsService } from "ngx-academia-uniandes-library";


@Injectable()
export class MenuFormService {

    private filterData = new BehaviorSubject<any>({});
    currentFilterData = this.filterData.asObservable();
    
    constructor(private utilService: UtilsService){

    }


    updateFilterData(filterData: any)   {
        this.utilService.clearUndefinedProperties(filterData)
        this.filterData.next(filterData);
    }


}