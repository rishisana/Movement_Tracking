import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Athlete } from 'src/app/model/athlete';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent {
  imgPath: string = 'assets/istockphoto-1300845620-1024x1024.jpg'
  athletes: Athlete[] = []
  id: number=0
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
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.getAthletes();
  }

  addAthlete(athlete: any) {
    this.dataService.addAthlete(athlete).subscribe(() => {
      this.ngOnInit();
      this.newAthlete.reset();
    });
  }
  getAthletes() {
    this.dataService.getAthletes().subscribe((data) => {
      this.athletes = data
    });
  }
  editAthlete(){
    this.dataService.editAthlete(this.changeAthlete.value,this.id).subscribe((data)=>{
      this.ngOnInit();
    })
  }

  deleteAthlete(athlete: any){
    this.dataService.deleteAthlete(athlete).subscribe((data)=>{
      this.ngOnInit();
    })
  }

  editModal(athlete: any){
    this.changeAthlete.patchValue({
      name: athlete.name,
      age: athlete.age,
      team: athlete.team
    })
    this.id = athlete.id      
  }

}
