import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Athlete } from 'src/app/model/athlete';
import { TeamService } from 'src/app/service/team.service';
import { Subject, map, of, switchMap, takeUntil, tap } from 'rxjs';
import { Team } from 'src/app/model/team';

@Component({
  selector: 'app-atheletes',
  templateUrl: './atheletes.component.html',
  styleUrls: ['./atheletes.component.css']
})
export class AtheletesComponent {
  imgPath: string = 'assets/istockphoto-1300845620-1024x1024.jpg'
  athletes: Athlete[] = []
  id: string | undefined

  destroy$ = new Subject<void>();

  newAthlete = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    team: new FormControl('')
  })

  changeAthlete = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    team: new FormControl('')
  })


  constructor(private dataService: DataService, private teamService: TeamService) { }

  ngOnInit() {
    this.getAthletes();
  }

  addAthlete(newAthlete: any) {
    this.dataService.addAthlete(newAthlete).pipe(switchMap(()=> this.teamService.addNewAthleteToTeam(newAthlete)), takeUntil(this.destroy$)).subscribe(()=>{
      this.getAthletes(); 
      this.teamService.getTeams()
    });
      this.newAthlete.reset();
  }

  getAthletes() {
    this.dataService.getAthletes().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.athletes = data
    });
  }

  editAthlete(){
    this.dataService.editAthlete(this.changeAthlete.value,this.id).pipe(takeUntil(this.destroy$)).subscribe((data)=>this.getAthletes())
  }

  deleteAthlete(athlete: any){
    this.dataService.deleteAthlete(athlete).pipe(takeUntil(this.destroy$)).subscribe((data)=>this.getAthletes())
  }

  editModal(athlete: any){
    this.changeAthlete.patchValue({
      name: athlete.name,
      age: athlete.age,
      team: athlete.team
    })
    this.id = athlete.id      
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
