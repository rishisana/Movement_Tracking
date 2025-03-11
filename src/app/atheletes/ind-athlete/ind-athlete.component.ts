import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, map, switchMap, takeUntil } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { Athlete } from 'src/app/model/athlete';
import { Input } from 'src/app/model/input';
import { PerformanceService } from 'src/app/service/performance.service';

@Component({
  selector: 'app-ind-athlete',
  templateUrl: './ind-athlete.component.html',
  styleUrls: ['./ind-athlete.component.css']
})
export class IndAthleteComponent {

  performance: Input[] = []
  indPerformance : Input[] = []

  indAthlete!: Athlete ; 
  imgPath: string = 'assets/istockphoto-1300845620-1024x1024.jpg';
  destroy$ = new Subject<void>();

  constructor(private performanceService: PerformanceService, private activatedRoute: ActivatedRoute, private dataService: DataService){}

  ngOnInit(){
    this.getperformanceDetails();  
    this.getAthleteById();  
  }

  getperformanceDetails(){
    this.performanceService.getPerformanceDetails().pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.performance = data
        });
  }
  getAthleteById(){
    let id = this.activatedRoute.snapshot.params['id'] 
    this.dataService.getAthleteById(id).pipe(takeUntil(this.destroy$)).subscribe((data)=>{
      this.indAthlete = data
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}
