import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from "../../http-service/login-service";
import { LoginDataService } from "../../login/logindataservice";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,private loginService:LoginService,private loginDataService:LoginDataService) {}

    // canActivate() {
    //     if (localStorage.getItem('isLoggedin')) {
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }

    //canActivate() {
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
            console.log("========In canActivate()==============");
           console.log("In AuthGuard::canActivate() loginDataService.userLoggedIn Value :: >>>>>>"+this.loginDataService.userLoggedIn);

            //console.log("valid user"+this.loginService.loginObj.validUser);
        if (this.loginDataService.userLoggedIn) {
             console.log("In AuthGuard::canActivate() in if"+this.loginDataService.userLoggedIn);
            // this.router.navigate(['/dashboard']);
            return true;
        }else{
             console.log("In AuthGuard::canActivate() in else"+this.loginDataService.userLoggedIn);
             this.router.navigate(['/login']);
            return false;
        }
       }
}
