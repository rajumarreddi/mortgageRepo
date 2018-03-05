import { Injectable } from '@angular/core';


import { Http, Response, Headers, BaseRequestOptions, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { SignupModel } from "../signup/signup.model";
import { MortgageModel } from "../layout/mortgage/mortgage.model";


@Injectable()
export class MortgageService {
   private headers = new Headers({ 'Content-Type': 'application/json' });
   selecteMotagage: MortgageModel;
   mortgageModel:MortgageModel=null;
   signupModelObj:SignupModel=null;
  public userLoggedIn:boolean=false;
   propertiesArray:MortgageModel[]=null;
  constructor(private http: Http) {
  }


getPropertyDetails(mlsId: string): Observable<MortgageModel> {
    let baseUrl: string = 'https://simplyrets-service.cfapps.io/getPropertyByMLSId/'+mlsId;
    return this.http.get(baseUrl)
      .map(this.extractRegistarationData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
  }

   extractRegistarationData(response:Response) {
      console.log("1");
        this.selecteMotagage = response.json();
        console.log("2");
        console.log("After hitting service -+++++++++--> "+this.selecteMotagage.amenities);     
        console.log("3"); 
              return this.selecteMotagage || { };
    }

  
   handleError(error: any) {
    console.log("handleError");
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }



  getAllProperties(): Observable<MortgageModel[]> {
    let baseUrl: string = 'https://simplyrets-service.cfapps.io/properties';
    return this.http.get(baseUrl)
      .map(this.extractAllPropertiesData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));;
  }

   extractAllPropertiesData(response:Response) {
      console.log("in side extractAllPropertiesData");
        this.propertiesArray = response.json();
        console.log(response.json());
        console.log("After hitting service -+++++++++--> "+this.propertiesArray);     
        console.log("3"); 
        return this.propertiesArray || { };
    }
}
