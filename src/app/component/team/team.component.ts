import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Athlete } from 'src/app/model/athlete';
import { Team } from 'src/app/model/team';
import { PerformanceService } from 'src/app/service/performance.service';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

//to retrieve the athletes information
players: Athlete[] =[]

//to retrieve the team information
teams: Team[]=[]
teamAthletes: Athlete[]=[]

//to edit the team by id
id: number =0

//to add new athlete
newTeam = new FormGroup({
  team_name: new FormControl(),
  athletes: new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    team: new FormControl('')
  })
})

//to update new athlete
updateTeam = new FormGroup({
  team_name: new FormControl(),
  athletes: new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    team: new FormControl('')
  })
})

constructor(private dataService : DataService, private teamService: TeamService){}

ngOnInit() {
  this.getAthletes();
  this.getTeams();
}

//to get all the athletes information
getAthletes() {
  this.dataService.getAthletes().subscribe((data) => {
    this.players = data
  });
}

//to get the team details
getTeams(){
  this.teamService.getTeams().subscribe((data)=>{
    this.teams = data
  })
}

//to add a new team
addTeam(team: any){
  this.teamService.addTeam(team).subscribe(()=>{
    this.ngOnInit();
  })
}

//to edit the given team
editTeam(){
  this.teamService.editTeam(this.editTeam, this.id).subscribe(()=>{
    this.ngOnInit();
  })
}

// to delete the team
deleteTeam(team: any){
  this.teamService.deleteTeam(team).subscribe(()=>{
    this.ngOnInit();
  })
}
editModal(team: Team){
  this.updateTeam.patchValue({
    team_name: team.team_name,
  })
//   this.updateTeam.setValue({
//     team_name: team.team_name,
//     // athletes[]: team.athletes
//   })
//   this.id = team.id
}

}
