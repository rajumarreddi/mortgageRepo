import { Component, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
//import { MortgageDocumentsModel } from "./mortgagedocuments.model";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { LoginService } from "../../http-service/login-service";
import { NgModel } from '@angular/forms';
import { DcoSignStatus } from "../mortgagedocuments/DocuSignStatus";
//import { RatesModel } from "./rates.model";
import { LoginDataService } from "../../login/logindataservice";
import { MortgageSubmissionDocumentsModel } from "./mortgagesubmissiondocuments.model";
import { Router } from '@angular/router';
import { Http, Response, Headers, BaseRequestOptions, RequestOptions} from '@angular/http';
import { MortgageSubmissionModel } from './mortgagesubmission.model';

@Component({
  selector: 'app-mortgagesubmission',
  templateUrl: './mortgagesubmission.component.html',
  styleUrls: ['./mortgagesubmission.component.scss'],
  animations: [routerTransition()]
})
export class MortgagesubmissionComponent implements OnInit {
  returnSignStatus : DcoSignStatus = null;
  documentsArr1 : string[];
  selectedDoc : string;
  mortgageDocumentArr : MortgageSubmissionDocumentsModel[] = [];
  mortgageDocument : MortgageSubmissionDocumentsModel;

  mortgageDocuSignArr : MortgageSubmissionDocumentsModel[] = [];
  mortgageDocuSign : MortgageSubmissionDocumentsModel;


  fileSaved : boolean = false;
  allFiles : File[] = [];
  docuSignFiles : File[] = [];
  mortgageSubmissionModel : FormGroup;

  constructor(private fb: FormBuilder, private mortgageEligibilityService: MortgageEligibilityService, public router: Router, private loginService: LoginService,
    private loginDataService: LoginDataService) { }

  ngOnInit() {
    this.documentsArr1 = this.mortgageEligibilityService.finalDocumentsArr;
    this.createForm();
  }

  onDocumentChange(docName: string) {
    console.log("changed Document is >>>" + docName);
    this.selectedDoc = docName;
  }

  createForm() {
    this.mortgageSubmissionModel = this.fb.group({
      documentType: new FormControl('', [Validators.required])
    });
  }

  onChange1(event: any) {
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    this.allFiles.push(file)
    console.log("Files added" + file.name);
    this.mortgageDocument = new MortgageSubmissionDocumentsModel;
    this.mortgageDocument.id = this.mortgageDocumentArr.length + 1;
    this.mortgageDocument.documentTitle = this.selectedDoc;
    this.mortgageDocument.file = file;
    this.mortgageDocument.status = 'Not Verified';
    this.mortgageDocument.verificationYello = true;
    this.mortgageDocument.verificationGreen = false;
    this.mortgageDocument.verificationRed = false;
    this.mortgageDocumentArr.push(this.mortgageDocument);
  }

  onDocuSignChange(event: any) {
    this.mortgageEligibilityService.onDocuSignServiceCall(event).subscribe(returnSignStatus => this.returnSignStatus = returnSignStatus);
    console.log(this.returnSignStatus);
  }

  onClickSignatureBtn() {
    console.log("before hitting service ---> " + this.returnSignStatus.docuSgingURL);
    window.open(this.returnSignStatus.docuSgingURL, "_blank");
    console.log("After hitting service ---> " + this.returnSignStatus.statusComleted);
    this.router.navigate(['/mortgagesuccess']);
  }

  // signature() {
  //   let url = this.returnSignStatus.docuSgingURL;
  //   window.open(url, "_blank"); 
  //   }

  onChange() {
    let formData = new FormData();
    console.log("all file array data " + this.allFiles.length);
    if (this.allFiles.length > 0) {


      for (let data of this.allFiles) {
        let file: File = data;
        formData.append('file', file, file.name);
        console.log("file. name is>>>>" + file.name);
      }

      console.log("all form data ::::::::::" + formData);
      this.loginService.uploadFileToDropBox(formData).subscribe(fileSaved => this.fileSaved = fileSaved);
      console.log("saved file" + this.fileSaved);
      var num: number = 0;
      var i: number;


      for (i = num; i < this.mortgageDocumentArr.length; i++) {
        console.log("Length of Array" + this.mortgageDocumentArr.length);
        if (i % 2 == 1) {
          console.log("Inside failed status");
          this.mortgageDocumentArr[i].status = 'Failed';
          this.mortgageDocumentArr[i].verificationYello = false;
          this.mortgageDocumentArr[i].verificationGreen = false;
          this.mortgageDocumentArr[i].verificationRed = true;
        } else {
          console.log("Inside success status");
          this.mortgageDocumentArr[i].status = 'Success';
          this.mortgageDocumentArr[i].verificationRed = false;
          this.mortgageDocumentArr[i].verificationGreen = true;
          this.mortgageDocumentArr[i].verificationYello = false;
        }
      }

    }

  }


  removeUploadDoc(doc: MortgageSubmissionDocumentsModel) {
    console.log("Removed id doc is" + doc.id);
    this.mortgageDocumentArr = this.mortgageDocumentArr.filter(mortgageDoc => mortgageDoc.id != doc.id);
    console.log("After array is " + this.mortgageDocumentArr);
    for (let obj in this.mortgageDocumentArr) {

    }
  }

  onChange2(event: any) {
    let fileList: FileList = event.target.files;
    let file : File = fileList[0];
    this.docuSignFiles.push(file)
    console.log("Files added" +file.name );
    this.mortgageDocuSign=new MortgageSubmissionDocumentsModel;
    this.mortgageDocuSign.id=this.mortgageDocuSignArr.length+1;
    this.mortgageDocuSign.documentTitle=this.selectedDoc;
    this.mortgageDocuSign.file=file;
    this.mortgageDocuSign.status='Not Yet Initialized';
    this.mortgageDocuSign.verificationYello=true;
    this.mortgageDocuSign.verificationGreen=false;
    this.mortgageDocuSign.verificationRed=false;
    this.mortgageDocuSignArr.push(this.mortgageDocuSign);
    console.log("@@@@@@@@@@@@@@@@ :: " + this.mortgageDocuSignArr.length );
    this.onChange4();
}

onChange4() {
  let formData = new FormData();
  console.log("all file array data " + this.docuSignFiles.length);
  if (this.docuSignFiles.length > 0) {


    for (let data of this.docuSignFiles) {
      let file: File = data;
      formData.append('file', file, file.name);
      console.log("file. name is>>>>" + file.name);
    }

    console.log("all form data ::::::::::" + formData);
    this.loginService.uploadFileToDocuSign(formData).subscribe(returnSignStatus => this.returnSignStatus = returnSignStatus);
    console.log("saved file :::::::: @@@@@@@ " + this.returnSignStatus.docuSgingURL);
    // var num: number = 0;
    // var i: number;


    // for (i = num; i < this.mortgageDocumentArr.length; i++) {
    //   console.log("Length of Array" + this.mortgageDocumentArr.length);
    //   if (i % 2 == 1) {
    //     console.log("Inside failed status");
    //     this.mortgageDocumentArr[i].status = 'Failed';
    //     this.mortgageDocumentArr[i].verificationYello = false;
    //     this.mortgageDocumentArr[i].verificationGreen = false;
    //     this.mortgageDocumentArr[i].verificationRed = true;
    //   } else {
    //     console.log("Inside success status");
    //     this.mortgageDocumentArr[i].status = 'Success';
    //     this.mortgageDocumentArr[i].verificationRed = false;
    //     this.mortgageDocumentArr[i].verificationGreen = true;
    //     this.mortgageDocumentArr[i].verificationYello = false;
    //   }
    // }

  }

  

}

onSubmitBack(mortgageSubModel:MortgageSubmissionModel){
  this.router.navigate(['/mortgagepreview']);
    
}

}
