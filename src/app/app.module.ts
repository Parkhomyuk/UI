import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {DashboardService} from "./services/dashboard.service";
import {HttpClientModule} from "@angular/common/http";
import {ShortPipe} from "./pipes/shorten.pipes";
import {MainContentComponent} from "./mainContent/main-content.component";
import {MessagesComponent} from "./mainContent/messages/messages.component";
import {ActivityComponent} from "./mainContent/activity/activity.component";
import {PlotCircleComponent} from "./mainContent/plot-circle/plot-circle.component";
import {TasksComponent} from "./mainContent/tasks/tasks.component";


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
