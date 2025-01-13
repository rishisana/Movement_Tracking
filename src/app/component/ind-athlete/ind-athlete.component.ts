import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Athlete } from 'src/app/model/athlete';
import { Input } from 'src/app/model/input';
import { PerformanceService } from 'src/app/service/performance.service';

@Component({
  selector: 'app-ind-athlete',
  templateUrl: './ind-athlete.component.html',
  styleUrls: ['./ind-athlete.component.css']
})
export class IndAthleteComponent {

  performance: Partial<{ date: any; name: any; movement: any; assessment: any; }>[] =[]
  indPerformance: Partial<{ date: any; name: any; movement: any; assessment: any; }>[] =[]

  // indAthlete!: Athlete;
  indAthlete ={
    id: 1,
    name:'',
    age: 1,
    team: '',
  }
  imgPath: string = 'assets/istockphoto-1300845620-1024x1024.jpg'

  constructor(private performanceService: PerformanceService, private activatedRoute: ActivatedRoute, private dataService: DataService){}

  ngOnInit(){
    this.getperformanceDetails();    
    this.getAthleteById();
  }

  getperformanceDetails(){
    this.performanceService.getPerformanceDetails().subscribe((data)=>{
      this.performance = data
      console.log("Inside the ind athlete component "+ this.performance);
        });
  }

  getAthleteById(){
    let id = this.activatedRoute.snapshot.params['id']    
    this.dataService.getAthleteById(id).subscribe((data)=>{
      this.indAthlete = data
       this.performance.find((d)=>{
        if(d.name == data.name){
          this.indPerformance.push(d)
        }
       }) 
    })
  }

}
