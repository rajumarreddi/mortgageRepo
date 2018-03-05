import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MortgageEligibiltyModel } from "./mortgageeligibilty.model";
import { LoginService } from "../../http-service/login-service";
import { Router } from '@angular/router';
import { routerTransition } from "../../router.animations";
import { MortgageEligibilityService } from "../../http-service/mortgageeligibility-service";
import { MapsAPILoader } from "@agm/core";

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
    
    
  constructor(private fb:FormBuilder,private loginService:LoginService,public router: Router,private mortgageEligibilityService:MortgageEligibilityService,
  private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone) { }

  ngOnInit() {
    this.createForm();
    if (this.mortgageEligibilityService.mortgageEligibilityModel) {
      this.mortgageEligibiltyModel.patchValue({
        name: this.mortgageEligibilityService.mortgageEligibilityModel.name,
        phone: this.mortgageEligibilityService.mortgageEligibilityModel.phone,
        email: this.mortgageEligibilityService.mortgageEligibilityModel.email,
        dateofbirth: this.mortgageEligibilityService.mortgageEligibilityModel.dateofbirth,
      
        gender: this.mortgageEligibilityService.mortgageEligibilityModel.gender,
        address: this.mortgageEligibilityService.mortgageEligibilityModel.address
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
        this.router.navigate(["/mortgagequotation"]);
        
       
       
    }

     createForm(){
       this.mortgageEligibiltyModel = this.fb.group({
         name: new FormControl('', [Validators.required]),
         phone: new FormControl('', [Validators.required]),
        
         email: new FormControl('', [Validators.required]),
           dateofbirth: new FormControl('', [Validators.required]),     
         gender: new FormControl('', [Validators.required]),
           address : new FormControl('', [Validators.required]),
           searchControl:new FormControl('')

       });

}

}