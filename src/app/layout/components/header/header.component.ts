import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from "../../../http-service/login-service";
import { LoginModel } from "../../../login/login.model";
import { LoginDataService } from "../../../login/logindataservice";
import { AuthService } from "angular2-social-login/dist";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
loginModel:LoginModel=new LoginModel();
name:String;
image:String;
findimage:boolean;


    constructor(private translate: TranslateService, public router: Router,private loginService:LoginService,private logindataService:LoginDataService,
    public _auth : AuthService) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar(); 
            }
        });
         console.log("HeaderComponent this.loginService.loginObj ======> "+this.loginService.loginObj);
          console.log("HeaderComponent this.loginDataService.loginObj ======> "+this.logindataService.loginObj);
        //this.loginModel=this.loginService.loginObj;
        this.loginModel=this.logindataService.loginObj;
     
        console.log("name in header comp"+this.name);
    }

    ngOnInit() {
          this.name=this.logindataService.userName;
          this.image=this.logindataService.image;
       
        //   this.name="RAJUUUUU";
        //   this.image=" https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg";



         if(this.image!=null){
            this.findimage=true;
         }else{
             this.findimage=false;
         }
         
         console.log("Image URL>>>>"+this.image);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.setItem('userData', '');
        localStorage.clear();
        this.loginService.loginObj.validUser=false;
        this.logindataService.userLoggedIn=false;
         this.logindataService.loginObj.validUser=false;
        this.logindataService.userLoggedIn=false;
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
