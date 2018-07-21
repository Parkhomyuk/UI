import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {Error} from "../../../../node_modules/tslint/lib/error";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

   tasks: any=[];
   error: Error;
  constructor(private dashService: DashboardService) { }

  ngOnInit() {
     this.dashService.getData().subscribe(data=>{this.tasks=data['tasks'] }, error => this.error = error);

  }

}
