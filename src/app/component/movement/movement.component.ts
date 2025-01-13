import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movement } from 'src/app/model/movement';
import { MovementService } from 'src/app/service/movement.service';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent {

//to retrieve all the movements from the movement service
movements: Movement[] =[]

//to add a new movement
newMovement = new FormGroup({
  mov_name: new FormControl(),
  type: new FormControl()
})

//to edit a movement
editMovement = new FormGroup({
  mov_name: new FormControl(),
  type: new FormControl()
})
id: number =0

constructor(private movementService: MovementService){}
ngOnInit(){
  this.getMovements();
}
//to get all the movement details
getMovements(){
  this.movementService.getMovements().subscribe((data)=>{
    this.movements = data
  })
}

//to add a new movement
addMovement(movement: any){
  this.movementService.addMovement(movement).subscribe(()=>{
    this.ngOnInit();
  })
}

//to update any movement
updateMovement(){
  this.movementService.updateMovement(this.editMovement.value, this.id).subscribe(()=>{
    this.ngOnInit();
  })

}
editModal(movement: any){
  this.id = movement.id
  this.editMovement.patchValue({
    mov_name: movement.mov_name,
    type: movement.type
  })
}

deleteAthlete(movement: any){
  this.movementService.deleteMovement(movement).subscribe(()=>{this.ngOnInit()})
}
}
