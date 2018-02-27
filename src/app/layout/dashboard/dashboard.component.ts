import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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

    constructor(private fb:FormBuilder) {
       
      
    }

    ngOnInit() {

        this.createForm();
    }

    onSubmit({ value, valid }: { value: UserInfo, valid: boolean }){
    console.log(value.name);

   

}

 createForm(){
    this.userInfo=this.fb.group({
     
      name:['',Validators.required],
      phone:['',Validators.required],
      salary:['',Validators.required],
      email:['',Validators.required ],
      address:['',Validators.required]
    });
  }

   
}
