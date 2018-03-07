import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageEligibiltyModel } from "./mortgageeligibilty.model";
import { LoginService } from "../../http-service/login-service";
import { Router } from '@angular/router';
import { routerTransition } from "../../router.animations";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { MapsAPILoader } from "@agm/core";
import { MortgageDocumentsModel } from "../mortgagedocuments/mortgagedocuments.model";
import { MortgageEligibilityDocumentsModel } from "./mortgageeligibilitydocuments.model";
import { LoginDataService } from "../../login/logindataservice";

@Component({
  selector: 'app-mortgageeligibility',
  templateUrl: './mortgageeligibility.component.html',
  styleUrls: ['./mortgageeligibility.component.scss'],
   animations: [routerTransition()]
})
export class MortgageeligibilityComponent implements OnInit {
    mortgageEligibiltyModel:FormGroup;
    address:String = '';
    @ViewChild('search') public searchElementRef: ElementRef;
   allFiles: File []=[];
   selectedDoc:string;
   mortgageDocumentArr:MortgageEligibilityDocumentsModel[]=[];
   mortgageDocument:MortgageEligibilityDocumentsModel;
   fileSaved:boolean=false;
   typeofEmploymentArr:string[];
    documentsArr:string[];
    pdfSrc: string = './../temp/test.pdf';
    // verificationGreen:boolean=false;
    // verificationRed:boolean=false;
    // verificationYello:boolean=false;
  constructor(private fb:FormBuilder,private loginService:LoginService,
  public router: Router,private mortgageEligibilityService:MortgageEligibilityService,
  private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone, private loginDataService:LoginDataService) {
    
      }

  ngOnInit() {
    this.documentsArr=this.mortgageEligibilityService.documentsArr;
    this.typeofEmploymentArr=this.mortgageEligibilityService.typesofEmployment;
    this.createForm();

    if (this.loginDataService.mortgageEligibiltyModel) {
      this.mortgageEligibiltyModel.patchValue({
        name: this.loginDataService.mortgageEligibiltyModel.name,
        phone: this.loginDataService.mortgageEligibiltyModel.phone,
        email: this.loginDataService.mortgageEligibiltyModel.email,
        dateofbirth: this.loginDataService.mortgageEligibiltyModel.dateofbirth,
        gender: this.loginDataService.mortgageEligibiltyModel.gender,
        address: this.loginDataService.mortgageEligibiltyModel.address
      });
    }

      this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });

     autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.address = place.formatted_address;
          console.log("Auto Completeeeeeeeeeee Adress===>::"+this.address);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });

  }  
    onSubmit({ value, valid }: { value: MortgageEligibiltyModel, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.address);
        this.mortgageEligibilityService.mortgageEligibilityModel=value;

        //Setting values to login service
        this.loginDataService.mortgageEligibiltyModel = value;

        this.router.navigate(["/mortgageproperty"]);
       
    }

     createForm(){
       this.mortgageEligibiltyModel = this.fb.group({
         name: new FormControl('', [Validators.required]),
         phone: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required]),
           dateofbirth: new FormControl('', [Validators.required]),     
         gender: new FormControl('', [Validators.required]),
           address : new FormControl('', [Validators.required]),
            typeOfEmployment : new FormControl('', [Validators.required]),
             grosssalary : new FormControl('', [Validators.required]),
              employer : new FormControl('', [Validators.required]),
           searchControl:new FormControl(''),
              documentType : new FormControl('', [Validators.required]),
       });

}


onChange1(event: any) {
         let fileList: FileList = event.target.files;
         let file : File = fileList[0];
        this.allFiles.push(file)
        console.log("Files added" +file.name );
        this.mortgageDocument=new MortgageEligibilityDocumentsModel;
        this.mortgageDocument.id=this.mortgageDocumentArr.length+1;
        this.mortgageDocument.documentTitle=this.selectedDoc;
        this.mortgageDocument.file=file;
        this.mortgageDocument.status='Not Yet Initialized';
       this.mortgageDocument.verificationYello=true;
       this.mortgageDocument.verificationGreen=false;
       this.mortgageDocument.verificationRed=false;
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
        var num:number = 0; 
        var i:number; 
       

      for(i = num;i< this.mortgageDocumentArr.length;i++) {
        console.log("Length of Array"+this.mortgageDocumentArr.length);
         if(i%2 ==1){
           console.log("Inside failed status");
          this.mortgageDocumentArr[i].status='Failed';
           this.mortgageDocumentArr[i].verificationYello=false;
       this.mortgageDocumentArr[i].verificationGreen=false;
       this.mortgageDocumentArr[i].verificationRed=true;
         }else{
            console.log("Inside success status");
           this.mortgageDocumentArr[i].status='Success';
            this.mortgageDocumentArr[i].verificationRed=false;
          this.mortgageDocumentArr[i].verificationGreen=true;
          this.mortgageDocumentArr[i].verificationYello=false;
         }
        }
        
    }
   
}

removeUploadDoc(doc:MortgageEligibilityDocumentsModel){
  console.log("Removed id doc is"+doc.id);
this.mortgageDocumentArr=this.mortgageDocumentArr.filter(mortgageDoc=>mortgageDoc.id != doc.id);
console.log("After array is "+this.mortgageDocumentArr);
for(let obj in this.mortgageDocumentArr){
 
}

}



}