import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {DashboardService} from "./services/dashboard.service";
import {HttpClientModule} from "@angular/common/http";
import {ShortPipe} from "./pipes/shorten.pipes";
import {MainContentComponent} from "./dashboard/main-content.component";
import {TasksComponent} from "./dashboard/tasks/tasks.component";
import {MessagesComponent} from "./dashboard/messages/messages.component";
import {ActivityComponent} from "./dashboard/activity/activity.component";
import {PlotCircleComponent} from "./dashboard/plot-circle/plot-circle.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    TasksComponent,
    ShortPipe,
    MessagesComponent,
    ActivityComponent,
    PlotCircleComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
