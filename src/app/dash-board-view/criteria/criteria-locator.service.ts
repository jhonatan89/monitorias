import { Injectable }    from '@angular/core';
import { ServiceMainLocator } from '../../service-locator-main';
import {CREATECRITERIA,
	UPDATECRITERIA,
	GETCRITERIA,
	SEARCHCRITERIA,
	TOTALNUMCRITERIA,
	DELETECRITERIA,
	BASE_URL,	GETALIAS } from './url-constants'



@Injectable()
export class LocatorCriteriaService {
	
	constructor(private serviceLocator: ServiceMainLocator){}
	

    getUrlList(): string{
        return this.buildURL(this.getHost(),BASE_URL,SEARCHCRITERIA);
    }
        
    getUrlCreate(): string{
        return this.buildURL(this.getHost(),BASE_URL, CREATECRITERIA);
    }
    
    getUrlUpdate(): string{
        return this.buildURL(this.getHost(), BASE_URL, UPDATECRITERIA);
    }
    
    getUrlGetItem(): string{
        return this.buildURL(this.getHost(), BASE_URL, GETCRITERIA);
    }
    
    getUrlListNum(): string{
        return this.buildURL(this.getHost(), BASE_URL, TOTALNUMCRITERIA);
    }
    
    getUrlDeleteItem(): string{
        return this.buildURL(this.getHost(), BASE_URL, DELETECRITERIA);
    }
    
    
    getAlias(): string{
    	return this.buildURL(this.getHost(), BASE_URL, GETALIAS);
    }
    
    
    
    public getHost(): string{
	        let host = this.serviceLocator.getHost();
	        return host;
	}
	
	private buildURL(...urlElements): string{
        return urlElements.reduce(function (accumulator, currentValue){
            return accumulator + '/' + currentValue ;
        });
    }
       



}