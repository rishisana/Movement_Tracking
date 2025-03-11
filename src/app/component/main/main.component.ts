import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
signUpUsers : any[] =[];
constructor(){  
}
ngOnInit(){
  const local = localStorage.getItem('key1');
  if(local!=null){
    this.signUpUsers = JSON.parse(local)
  }
}

signUp = new FormGroup({
  userName: new FormControl(''),
  emailId: new FormControl(''),
  password: new FormControl('')
})
onSignUp(){
  let a = 'fdhbs'
  this.signUpUsers.push(a)
  localStorage.setItem('key1', JSON.stringify(this.signUpUsers))
}
}

