import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../services/dashboard.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  subscribtion: Subscription
  toggle:Boolean=true;
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.subscribtion=this.dashService.sidebarChanged.subscribe(data=>{console.log(data), this.toggle=data});
    console.log('tog'+this.toggle);
    this.toggle=this.dashService.getToggle();

  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
