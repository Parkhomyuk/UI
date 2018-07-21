import { Component, OnInit,OnDestroy } from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy  {

    messages:any=[];
  subscription: Subscription;
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
    this.dashService.getData().subscribe((message)=>{this.messages=message['messages']})

  }
  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }
}
