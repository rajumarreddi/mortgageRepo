export class LoginModel{
    emailId:string
    password:string
    validUser:boolean
    name:string

constructor(
      //  name : string, rutNumber : string, account : number, bank : string, email : string
    ){
        this.emailId="";
        this.name = "";
        this.password = "";
        this.validUser = false;
      
    }
}