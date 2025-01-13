import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Athlete } from 'src/app/model/athlete';
import { Input } from 'src/app/model/input';
import { Movement } from 'src/app/model/movement';
import { Team } from 'src/app/model/team';
import { MovementService } from 'src/app/service/movement.service';
import { PerformanceService } from 'src/app/service/performance.service';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {

  //variable to store all the user inputs of team performance
  athlete_performance: Partial<{ date: any; name: any; movement: any; assessment: any; }>[] = []

  athletes: Athlete[] = []

  //for connecting the html form and ts we are using form group and form control
  performance = new FormGroup({
    date: new FormControl(),
    movement: new FormControl(),
    team_name: new FormControl(),
      athlete: new FormGroup({
        athlete_name: new FormControl(),
        assessment: new FormControl()
      })
    })

  // id: new FormControl()
  // mov_name: string = ''

  //to get the team details
  teams: Team[] =[]
  movements: Movement[] = []
  teamSelected= false
  selectedOption: string =''
  ngOnInit() {
    this.getMovements();
    this.getTeams();
   // this.getAthletes();
  }
  constructor(private movementService: MovementService, private dataService: DataService, private performanceService: PerformanceService, private teamService: TeamService) { }

  //to get all the list of movements
  getMovements() {
    this.movementService.getMovements().subscribe((data) => { 
      this.movements = data
    })
  }
  //to get all the athlete details
  // getAthletes() {
  //   this.teams.forEach((d)=>{
  //     this.athletes = d.athletes
  //    })
  // }

  //To get the team details
  getTeams(){
    this.teamService.getTeams().subscribe((data)=>{
       this.teams = data;
    })
  }

  onChange(event : any){
    this.selectedOption = event.target.value;
    this.teams.forEach((d)=>
    { if( d.team_name == this.selectedOption){
     console.log("###########");
     
         this.athletes = d.athletes
         this.teamSelected = true
         console.log("The value of the selected option is " + this.selectedOption);
    }

   })
  }

  //on submissison of the input form
  onSubmit() {
    
    this.performanceService.addPerformanceDetails(this.performance.value).subscribe(() => {
      console.log("The value of the inputted field is " + this.performance.value);   
      this.ngOnInit();
    });
    this.performance.reset();
    this.teamSelected =false
  }

}

