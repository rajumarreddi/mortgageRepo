import { Component, OnInit, ViewChild, ElementRef, NgZone, Injectable } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MortgageInfo } from "./mortgageInfo";
import {AuthService} from 'angular2-social-login';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { } from 'googlemaps';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
@Injectable()
export class FormComponent implements OnInit {
    mortgageInfo:FormGroup;
    
    @ViewChild('search') public searchElement: ElementRef;

    constructor(private fb:FormBuilder, 
    //private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone) {
        
    }

    ngOnInit() {
        this.createForm();
    //      this.mapsAPILoader.load().then(
    //   () => {
    //     let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });

    //     autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //       if(place.geometry === undefined || place.geometry === null ){
    //       return;
    //       }
    //       console.log(place);
    //     });
    //     });
    //   }
    // );
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
