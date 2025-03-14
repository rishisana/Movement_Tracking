import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loggedIn: boolean = false
  showPassword : boolean = false
  constructor(private dataService : DataService, private router: Router){}

  login = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/), Validators.required])
  })

  onShowPassword(){
    this.showPassword = !this.showPassword;
  }

onSubmit(){
  this.userlogin = true;
  this.router.navigate(['/team']);
  
}

get userlogin(): boolean{
  return this.dataService.userlogin;
}

set userlogin(value){
  this.dataService.userlogin = value
}


}
