import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Athlete } from 'src/app/model/athlete';
import { Movement } from 'src/app/model/movement';
import { Team } from 'src/app/model/team';
import { MovementService } from 'src/app/service/movement.service';
import { PerformanceService } from 'src/app/service/performance.service';
import { TeamService } from 'src/app/service/team.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {

  athlete_performance: Partial<{ date: any; name: any; movement: any; assessment: any; }>[] = []

  athletesData: Athlete[] = []

  destroy$ = new Subject<void>();
  performance = new FormGroup({
    date: new FormControl(),
    movement: new FormControl(''),
    team_name: new FormControl(''),
      athletes: new FormArray([])
    })


  //to get the team details
  teams: Team[] =[]
  movements: Movement[] = []
  teamSelected= false
  selectedOption: string =''
  
  constructor(private movementService: MovementService, private dataService: DataService, private performanceService: PerformanceService, private teamService: TeamService) { }

  ngOnInit() {
    this.getMovements();
    this.getTeams();
  }

  //to get all the list of movements
  getMovements() {
    this.movementService.getMovements().pipe(takeUntil(this.destroy$)).subscribe((data) => { 
      this.movements = data
    })
  }
 

  //To get the team details
  getTeams(){
    this.teamService.getTeams().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
       this.teams = data;
    })
  }

  get athletes() : FormArray {
    return this.performance.get('athletes') as FormArray
  }
  

  onChange(event: any) {
    this.selectedOption = event.target.value;
    
    let athletesArray = this.performance.get('athletes') as FormArray
    athletesArray.clear();
    this.teams.forEach((d) => {

      if (d.team_name == this.selectedOption) {
        this.athletesData = d.athletes
        this.teamSelected = true
        this.athletesData.forEach((athlete)=>{
          let athleteFg = new FormGroup({});
          athleteFg.addControl('name', new FormControl(athlete.name))
          athleteFg.addControl('assessment', new FormControl(0))
          athletesArray.push(athleteFg);
        })
      }
    })
  }

  //on submissison of the input form
  onSubmit() {
    this.performanceService.addPerformanceDetails(this.performance.value).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.getMovements();  
      this.getTeams();
    });

    this.athletes.clear();
    this.performance.reset({
      date: '',
      movement: '',  
      team_name: '', 
    });
    this.teamSelected =false
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

