import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../services/dashboard.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
    subscribtion: Subscription;
    toggle:Boolean=true;
    user:string;
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.dashService.getData().subscribe((user)=>{this.user=user['user']});
    this.subscribtion=this.dashService.sidebarChanged.subscribe(data=>{console.log(data), this.toggle=data});
    this.toggle=this.dashService.getToggle();
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
}
