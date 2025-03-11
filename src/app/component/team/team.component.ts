import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Athlete } from 'src/app/model/athlete';
import { Team } from 'src/app/model/team';
import { PerformanceService } from 'src/app/service/performance.service';
import { TeamService } from 'src/app/service/team.service';
import { Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

//to retrieve the team information
teams: Team[]=[]
teamAthletes: Athlete[]=[]

//to edit the team by id
id: string | undefined

//to add new athlete
newTeam!: FormGroup
destroy$ = new Subject<void>();

//to update new athlete
updateTeam !: FormGroup
newTeamAthlete!: FormGroup
addNewAthlete:boolean = false

constructor(private dataService : DataService, private teamService: TeamService){}

ngOnInit() {
  this.updateTeam = new FormGroup({
    team_name: new FormControl(),
    athletes: new FormArray([ 
      new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
    })
  ])
  })

  this.newTeam = new FormGroup({
    team_name: new FormControl(),
    athletes: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        age: new FormControl(''),
        team: new FormControl('')
      })
    ])
  })

  this.newTeamAthlete = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    team: new FormControl('')
  })
  this.getTeams();
}


get athletes(){
  return this.newTeam.get('athletes') as FormArray
}

get athletes_update(){
  return this.updateTeam.get('athletes') as FormArray
}

//to get the team details
getTeams(){
  this.teamService.getTeams().subscribe((data)=>{
    this.teams = data;
  })
}


onAddAthlete(){
  let athlete1 = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    team: new FormControl('')
  })
  this.athletes.push(athlete1)
}

//to add a new team
addTeam(team: Team){
  if(team.athletes ){
    team.athletes.forEach(athlete => {
      athlete.team = team.team_name;
    })
  }
  this.teamService.addTeam(team).pipe(takeUntil(this.destroy$)).subscribe(()=> this.getTeams());
  this.athletes.clear();
  this.newTeam.reset();

}

//to edit the given team
editTeam(updateTeam: any){
  this.teamService.editTeam(updateTeam, this.id).pipe(takeUntil(this.destroy$)).subscribe((data)=> {
    this.getTeams();
  });
}

deleteTeamAthlete(id: any){
  return this.athletes_update.removeAt(id);
}

// to delete the team
deleteTeam(team: any){
  this.teamService.deleteTeam(team).pipe(takeUntil(this.destroy$)).subscribe(()=> this.getTeams());
}
editModal(team: Team){
  this.updateTeam.patchValue({
    team_name: team.team_name
  })
  this.athletes_update.clear();
  if(team.athletes){
    team.athletes.forEach(athlete => {
      let athele1 = new FormGroup({
         name: new FormControl(athlete.name),
         age: new FormControl(athlete.age),
       })
       this.athletes_update.push(athele1)
     }
     )
  }
  this.id = team.id;
}

ngOnDestroy(){
  this.destroy$.next();
  this.destroy$.complete();
}

}
