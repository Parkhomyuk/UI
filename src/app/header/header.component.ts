import { Component, OnInit, OnDestroy } from '@angular/core';
import {DashboardService} from "../services/dashboard.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  toggle: Boolean;
  subscribtion: Subscription;
  constructor(private dashBoardService: DashboardService) { }

  ngOnInit() {
    this.subscribtion=this.dashBoardService.sidebarChanged.subscribe(data=>{console.log(data), this.toggle=data});
    this.toggle=this.dashBoardService.getToggle()
  }
  toggleBar(){
    if(this.dashBoardService.toggleSidebar==true){

      this.dashBoardService.sidebarChanged.next(this.dashBoardService.toggleSidebar=false);
    }else{

      this.dashBoardService.sidebarChanged.next(this.dashBoardService.toggleSidebar=true);
    }


  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }
}
