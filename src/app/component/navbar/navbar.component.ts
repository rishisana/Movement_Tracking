import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logged: boolean =false;
  
  constructor(private dataservice: DataService){}
  ngOnInit(): void {   
  }

  onClick(){
    this.userlogin = false;
  }
  
  get userlogin(): boolean{
    return this.dataservice.userlogin
  }

  set userlogin(value){
    this.dataservice.userlogin = value
  }

  logOut(){
    this.dataservice.userlogin = false
  }
}
