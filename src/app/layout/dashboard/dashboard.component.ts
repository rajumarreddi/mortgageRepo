import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { UserInfo } from "./userinfo";
import { FileUploader } from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
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

   
    //namePattern = "^[a-zA-Z\s]+$";
    //phonePattern = "^[+]?[0-9]{0,1}[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";
    //salaryPattern : "/^\d{1,6}(?:\.\d{0,2})?$/"; // Optional dot and two decimal numbers
    //salaryPattern : "/^\d{1,6}\.\d{0,2}$/"; // required dot and two decimal numbers
    //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}";
    //addressPattern = "\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.";
    

    constructor(private fb:FormBuilder) {
      
    }

    ngOnInit() {
        this.createForm();
    }

    onSubmit({ value, valid }: { value: UserInfo, valid: boolean }) {
        if (this.userInfo.valid) {
            console.log("Valid Form :: " + value.name);
        } else {
            console.log("Invalid Form");
        }
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
  
}
