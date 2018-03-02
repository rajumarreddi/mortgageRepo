import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from "../../../http-service/login-service";
import { LoginModel } from "../../../login/login.model";
import { LoginDataService } from "../../../login/logindataservice";

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
    constructor(private translate: TranslateService, public router: Router,private loginService:LoginService,private logindataService:LoginDataService) {

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
         console.log("service in header comp"+this.loginService.loginObj);
        this.loginModel=this.loginService.loginObj;
     
        console.log("name in header comp"+this.name);
    }

    ngOnInit() {
         this.name=this.logindataService.userName;
         this.image=this.logindataService.image;
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
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
