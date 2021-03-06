import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageDocumentsModel } from "./mortgagedocuments.model";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { LoginService } from "../../http-service/login-service";
import { NgModel } from '@angular/forms';
import { DcoSignStatus } from "./DocuSignStatus";
import { RatesModel } from "./rates.model";
import { LoginDataService } from "../../login/logindataservice";
@Component({
  selector: 'app-mortgagedocuments',
  templateUrl: './mortgagedocuments.component.html',
  styleUrls: ['./mortgagedocuments.component.scss'],
    animations: [routerTransition()]
})
export class MortgagedocumentsComponent implements OnInit {
  mortgageDocumentsModel:FormGroup;
  documentsArr:string[];
  fileSaved:boolean=false;
   allFiles: File []=[];
   selectedDoc:string;
   mortgageDocumentArr:MortgageDocumentsModel[]=[];
   mortgageDocument:MortgageDocumentsModel;
   goalArr:string[]=[];
   timeArr:string[]=[];
   ratesArr:RatesModel[]=[];

returnData : DcoSignStatus = null;

  constructor(private fb:FormBuilder,private mortgageEligibilityService:MortgageEligibilityService,public router: Router,private loginService:LoginService,
  private loginDataService:LoginDataService) {
    this.documentsArr=this.mortgageEligibilityService.documentsArr;
    console.log("In login Data sssssssssssssssss  -->"+this.loginDataService.mortgagePropertyModel.mlsId);
   }

  ngOnInit() {
    this.createForm();
    this.goalArr=this.mortgageEligibilityService.goalArr;
    this.timeArr=this.mortgageEligibilityService.timeArr;
    this.ratesArr=this.mortgageEligibilityService.ratesArr;
   
  }


   onSubmitBack({ value, valid }: { value: MortgageDocumentsModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.documentTitle);
        this.router.navigate(["/mortgageadjucation"]);
        
       
       
    }


    onSubmitNext({ value, valid }: { value: MortgageDocumentsModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.documentTitle);
        this.loginDataService.mortgageDocumentsModel=value;

      this.router.navigate(["/mortgagepreview"]);
        
       
       
    }


     createForm(){
       this.mortgageDocumentsModel = this.fb.group({
         documentType: new FormControl('', [Validators.required]),
         documentTitle: new FormControl('', [Validators.required]),
         goal: new FormControl('', [Validators.required]),
         purchaseprice: new FormControl('', [Validators.required]),
         downpayment: new FormControl('', [Validators.required]),
         timing: new FormControl('', [Validators.required]),
         postalcode: new FormControl('', [Validators.required]),
        ratesModel: new FormControl('', [Validators.required]),
ratesModelId: new FormControl('', [Validators.required])
       });
     }

  onChange1(event: any) {
         let fileList: FileList = event.target.files;
         let file : File = fileList[0];
        this.allFiles.push(file)
        console.log("Files added" +file.name );
        this.mortgageDocument=new MortgageDocumentsModel;
        this.mortgageDocument.documentTitle=this.selectedDoc;
        this.mortgageDocument.file=file;
        this.mortgageDocumentArr.push(this.mortgageDocument);
    }

    onDocumentChange(docName:string){
      console.log("changed Document is >>>"+docName);
      this.selectedDoc=docName;
    }

    onChange() {
        let formData = new FormData();
        console.log("all file array data "+ this.allFiles.length);
        if(this.allFiles.length > 0) {
            
           
                for(let data of  this.allFiles){
                    let file: File = data;
                    formData.append('file', file, file.name);
                    console.log("file. name is>>>>"+file.name);
                }
                
           
       
        console.log("all form data ::::::::::"  + formData);
        this.loginService.uploadFileToDropBox(formData).subscribe(fileSaved => this.fileSaved = fileSaved);
         console.log("saved file"+this.fileSaved);
    }
   
}


// onDocuSignChange(event: any)  {
//     console.log("onChange1 =======");
//     this.mortgageEligibilityService.onDocuSignServiceCall(event).subscribe((returnData : DcoSignStatus) => {this.returnData = returnData});
//     console.log(this.returnData);
// }

// onClickSignatureBtn(){
  
//         console.log("After hitting service ---> " + this.returnData.docuSgingURL);
//         window.open(this.returnData.docuSgingURL, "_blank");
// }
//  onDocuSignChange(event: any) : Observable<DcoSignStatus>{
//    this.returnData = new DcoSignStatus();
//     console.log("onChange =======");
//     let fileList: FileList = event.target.files;
//     if(fileList.length > 0) {
//         let file: File = fileList[0];
               
//         let formData:FormData = new FormData();
//         formData.append('file', file, file.name);
       
//          // console.log("IIIIIIIIIIIIIIII"+ dropDetail.inputFile);
//         let headers = new Headers();
//         headers.append('Accept', 'application/json');
//         //headers.append('Content-Type', 'multipart/form-data');
//         //'http://localhost:8080/dorpBoxFileUpload'
//         //https://DocuSignExample.cfapps.io
//        return this.http.post('https://DocuSignExample.cfapps.io/docSignFileUpload', formData, headers)
//        .map(this.extractLoginData)
//             .catch(error => Observable.throw(error))
//         }
//     }

//     extractLoginData(response:Response) {
//         this.returnData = response.json();
//         console.log("After hitting service ---> " + this.returnData.docuSgingURL);
//         window.open(this.returnData.docuSgingURL, "_blank");
//         return this.returnData || { };
        
//     }








}

