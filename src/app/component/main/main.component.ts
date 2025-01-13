import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
signUpUsers : any[] =[];
// signUpObj : any = {
//   userName :'',
//   emailId: '',
//   password:''
// }
constructor(){  
}
ngOnInit(){
  const local = localStorage.getItem('key1');
  if(local!=null){
    // this.signUp.setValue(JSON.parse(local));
    this.signUpUsers = JSON.parse(local)
    console.log("The value of the key is logged in here " + this.signUpUsers);
  }
}

signUp = new FormGroup({
  userName: new FormControl(''),
  emailId: new FormControl(''),
  password: new FormControl('')
})
onSignUp(){
  console.log("**" + this.signUpUsers);
  
  // this.signUpUsers.push(this.signUp)
  let a = 'fdhbs'
  this.signUpUsers.push(a)
  console.log("The value of the sign up users is " + this.signUpUsers);
  
  console.log("We have a new user" + this.signUp);
  // localStorage.setItem('key1', JSON.stringify(this.signUp.value))
  // this.signUp.reset();
  localStorage.setItem('key1', JSON.stringify(this.signUpUsers))
}
}

