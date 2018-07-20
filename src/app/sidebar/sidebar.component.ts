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
  mobToggle=false;
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.subscribtion=this.dashService.sidebarChanged.subscribe(data=>{console.log(data), this.toggle=data});
    console.log('tog'+this.toggle);
    this.toggle=this.dashService.getToggle();

  }
  onsidebarClick(){
    if(this.dashService.toggleSidebar==true){

      this.dashService.sidebarChanged.next(this.dashService.toggleSidebar=false);
    }else{

      this.dashService.sidebarChanged.next(this.dashService.toggleSidebar=true);
    }
  }
  onCloseMenuMobile(){
    if(this.dashService.toggleSidebar==true){

      this.dashService.sidebarChanged.next(this.dashService.toggleSidebar=false);
    }else{

      this.dashService.sidebarChanged.next(this.dashService.toggleSidebar=true);
    }
    return this.mobToggle=!this.mobToggle;

  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
