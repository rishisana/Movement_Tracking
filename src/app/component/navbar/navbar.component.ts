import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

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
  
  get userlogin(): boolean{
    return this.dataservice.userlogin
  }

  set userlogin(value){
    this.dataservice.userlogin = value
  }
}
