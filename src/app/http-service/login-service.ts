import { Injectable } from '@angular/core';
import { LoginModel } from './../Model/login-model';
//import { Recipients } from './../http-service/recipients';
import { Http, Response, Headers,BaseRequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginService {

   private headers = new Headers({ 'Content-Type': 'application/json' });
   selectedUser: LoginModel;
  constructor(private http: Http) {
  }

  // getRecipients(): Recipients[] {
  //   return RECIPIENTS;
  // }

  saveSelectedLoginModel(selectedUser: LoginModel) {
    this.selectedUser = selectedUser;
  }

  // getSelectedRecipient() {
  //   return this.selectedRecipient;
  // }

  // /**
  //  *  ================ fetch all recipients =============
  //  */

  // getRecipeintsWithObserable(): Observable<Recipients[]> {
  //   let baseUrl: string = 'http://localhost:8080/getAllRecipients';
  //   return this.http.get(baseUrl)
  //     .map(response => response.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));;

  // }

  // /**
  //  * ================   update recipient=================
  //  * @param updatedRecipients 
  //  */
  // updateRecipient(updatedRecipients: Recipients): Observable<Recipients> {
  //   let updateUrl = `http://localhost:8080/updateRecipient/${updatedRecipients.recipientId}`;
  //   console.log(updateUrl);
  //   return this.http
  //     .put(updateUrl, updatedRecipients, { headers: this.headers })
  //     .map(this.extractData1)
  //     .catch(this.handleError);
  // }


  // /**
  //  * =============== Create recipient ===========
  //  * @param recipient
  //  */

  createLoginModel(loginModel: LoginModel): Observable<LoginModel> {
    console.log(loginModel);
    let addUrl = `https://mortgage-app.cfapps.io/login`;
    return this.http
      .post(addUrl, loginModel, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }
    extractData(res: any) {
    let body = res.json();
    console.log(res);
    if (body instanceof Array) {
      return body || [];
    }
    else return body.post || {};
  }

  
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //console.error(errMsg);
    return Observable.throw(errMsg);
  }


  // /**
  //  *  ========== delete recipients ================
  //  * 
  //  */

 
  // deleteRecipient(recipient: Recipients): Observable<boolean> {
  //   console.log(recipient);
  //   let deleteUrl = `http://localhost:8080/deleteRecipient/${recipient.recipientId}`;
  //   return this.http.delete(deleteUrl,{ headers: this.headers })
  //   .map(response => response.json())
  //   .catch(this.handleError);
  // }

  // /**
  //  *  ============= common methods ==============
  //  */

  // extractData(res: any) {
  //   let body = res.json();
  //   //console.log(res);
  //   if (body instanceof Array) {
  //     return body || [];
  //   }
  //   else return body.post || {};
  // }

  // private extractData1(res: any) {
  //   let body = res.json();
  //   return body || {};
  // }

  // private handleError(error: any) {
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   //console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }



  /**
   *  ============== using promise===============
   * 
   */


  // updateRecipients(updatedRecipients: Recipients): Promise<Recipients> {
  //   const url = `http://localhost:8080/updateRecipient/${updatedRecipients.recipientId}`;
  //   return this.http
  //     .put(url, JSON.stringify(updatedRecipients), { headers: this.headers })
  //     .toPromise()
  //     .then(() => updatedRecipients)
  //     .catch(this.handleError);
  // }


  // private getHeaders() {
  //   // I included these headers because otherwise FireFox
  //   // will request text/html instead of application/json
  //   let headers = new Headers();
  //   headers.append('Accept', 'application/json');
  //   return headers;
  // }

}
