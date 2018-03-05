import { Component, OnInit, ViewChild, ElementRef, NgZone, Injectable } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { MortgageInfo } from "./mortgageInfo";
import {AuthService} from 'angular2-social-login';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { } from 'googlemaps';
import { HttpModule } from '@angular/http';
import { MapsAPILoader } from "@agm/core";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
@Injectable()
export class FormComponent implements OnInit {
    mortgageInfo:FormGroup;
    public searchControl: FormControl;
    address:String = '';
    
    @ViewChild('search') public searchElementRef: ElementRef;

    constructor(private fb:FormBuilder, 
    private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone) {
        
    }

    ngOnInit() {
        this.createForm();

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

    createForm(){
        this.mortgageInfo=this.fb.group({
        address:['', Validators.required]
        });
    }

    onSubmit({ value, valid }: { value: MortgageInfo, valid: boolean }){
        console.log(value.address);
    }

}
