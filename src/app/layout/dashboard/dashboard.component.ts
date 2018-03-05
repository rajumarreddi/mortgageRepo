import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { UserInfo } from "./userinfo";
import { FileUploader } from 'ng2-file-upload';
import { LoginService } from "../../http-service/login-service";
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
import { Http, Response, Headers, BaseRequestOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    userInfo:FormGroup;
    public uploader:FileUploader = new FileUploader({url: URL});
    returnData : UserInfo =  new UserInfo();
    fileSaved :boolean=false;
    fileSavedMessage:string=null;

    formData : FormData ;
   
    //namePattern = "^[a-zA-Z\s]+$";
    //phonePattern = "^[+]?[0-9]{0,1}[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";
    //salaryPattern : "/^\d{1,6}(?:\.\d{0,2})?$/"; // Optional dot and two decimal numbers
    //salaryPattern : "/^\d{1,6}\.\d{0,2}$/"; // required dot and two decimal numbers
    //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}";
    //addressPattern = "\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.";
    

    constructor(private fb:FormBuilder,private loginService:LoginService) {
      
    }

    ngOnInit() {
        
        this.createForm();
        this.formData = new FormData();
    }

    onSubmit({ value, valid }: { value: UserInfo, valid: boolean }) {

        console.log(">>>>>>>>>>>full name in ocmoponent" + value.name);
        this.loginService.savePersonalDetails(value).subscribe(returnData => this.returnData = returnData);
        console.log("return Data :: " + this.returnData.dataSaved + "::::::" + this.returnData.email);
        this.reset();

    }

    createForm(){
        this.userInfo = this.fb.group({
            name : new FormControl('', [Validators.required]),
            phone : new FormControl('', [Validators.required]),
            salary : new FormControl('', [Validators.required]),
            email : new FormControl('', [Validators.required]),
            address : new FormControl('', [Validators.required])

            // name : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(this.namePattern)]),
            // phone : new FormControl(null, [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern(this.phonePattern)]),
            // salary : new FormControl(null, [Validators.required, Validators.pattern(this.salaryPattern)]),
            // email : new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
            // address : new FormControl(null, [Validators.required, Validators.pattern(this.addressPattern)])
        });
    }

    
    reset() {
        this.userInfo.reset();
    }


    onChange(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        
        //let dropDetail :  DropDetail = new DropDetail();
       // dropDetail.accessToken = "aaaa";
        //JSON.stringify(json)
        //dropDetail.inputFile.append('file', file, file.name);
        //let formData:FormData = new FormData();
        this.formData.append('file', file, file.name);
       console.log("file. name is>>>>"+file.name);
       // console.log("FFFFFFFFFFFFFFF"+ formData)
        // dropDetail.inputFile=formData;
        // console.log("IIIIIIIIIIIIIIII"+ dropDetail.inputFile);
        // let headers = new Headers();//;content-type=multipart
        // headers.append('Accept', 'application/json');
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

        this.loginService.uploadFileToDropBox(this.formData).subscribe(fileSaved => this.fileSaved = fileSaved);
         console.log("saved file"+this.fileSaved);
    }
}
  
}
