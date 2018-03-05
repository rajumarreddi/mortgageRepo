import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from "../../router.animations";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageDocumentsModel } from "./mortgagedocuments.model";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
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
  constructor(private fb:FormBuilder,private mortgageEligibilityService:MortgageEligibilityService,public router: Router) {
    this.documentsArr=this.mortgageEligibilityService.documentsArr;
   }

  ngOnInit() {
    this.createForm();
  }


   onSubmitBack({ value, valid }: { value: MortgageDocumentsModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.documentTitle);
        this.router.navigate(["/mortgageproperty"]);
        
       
       
    }


    onSubmitNext({ value, valid }: { value: MortgageDocumentsModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.documentTitle);
        //this.mortgageEligibilityService.mortgagePropertyModel=value;

      this.router.navigate(["/mortgagesubmission"]);
        
       
       
    }


     createForm(){
       this.mortgageDocumentsModel = this.fb.group({
         documentType: new FormControl('', [Validators.required]),
          documentTitle: new FormControl('', [Validators.required])
        

       });
     }


      onChange(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        
        //let dropDetail :  DropDetail = new DropDetail();
       // dropDetail.accessToken = "aaaa";
        //JSON.stringify(json)
        //dropDetail.inputFile.append('file', file, file.name);
        let formData:FormData = new FormData();
        formData.append('file', file, file.name);
       console.log("file. name is>>>>"+file.name);
       // console.log("FFFFFFFFFFFFFFF"+ formData)
        // dropDetail.inputFile=formData;
        // console.log("IIIIIIIIIIIIIIII"+ dropDetail.inputFile);
        let headers = new Headers();//;content-type=multipart
        headers.append('Accept', 'application/json');
        //headers.append('Content-Type', 'multipart/form-data');
        //'http://localhost:8080/dorpBoxFileUpload'
        //https://DocuSignExample.cfapps.io


        // this.http.post('https://DocuSignExample.cfapps.io/dorpBoxFileUpload', formData,headers)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )

        this.mortgageEligibilityService.uploadFileToDropBox(formData).subscribe(fileSaved => this.fileSaved = fileSaved);
         console.log("saved file"+this.fileSaved);
    }

}
}
