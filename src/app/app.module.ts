import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import {DashboardService} from "./services/dashboard.service";
import { TasksComponent } from './main-content/tasks/tasks.component';
import {HttpClientModule} from "@angular/common/http";
import {ShortPipe} from "./pipes/shorten.pipes";
import { MessagesComponent } from './main-content/messages/messages.component';
import { ActivityComponent } from './main-content/activity/activity.component';
import { PlotCircleComponent } from './main-content/plot-circle/plot-circle.component';


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
