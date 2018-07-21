import { Component, OnInit,OnDestroy } from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {


  activities:any=[];
  activitiesNumber:any=Number;
  subscription: Subscription;
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.dashService.getData().subscribe((activities)=>{this.activities=activities['activites'], this.activitiesNumber=(activities['activites'].length-1)})

  }
  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }
}
