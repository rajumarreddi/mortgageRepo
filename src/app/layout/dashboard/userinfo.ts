import { FileUploader } from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
export class UserInfo{
    name:string;
    phone:number;
    salary:number;
    email:string;
    address:string;
    uploader:FileUploader = new FileUploader({url: URL});
   
}