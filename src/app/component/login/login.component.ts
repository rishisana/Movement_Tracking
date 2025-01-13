import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loggedIn: boolean = false
  
  constructor(private dataService : DataService, private router: Router){}

  login = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl('')
  })


onSubmit(){
  console.log("Successfully logged in");
  // this.loggedIn =true
  // localStorage.setItem('key1',JSON.stringify(this.loggedIn))
  this.userlogin = true;
  this.router.navigate(['/athlete']);
  
}

get userlogin(): boolean{
  return this.dataService.userlogin;
}

set userlogin(value){
  this.dataService.userlogin = value
}


}
