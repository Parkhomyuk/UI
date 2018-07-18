import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class DashboardService{
  sidebarChanged = new Subject<Boolean>();
  toggleSidebar=true;
  configUrl = 'assets/data.json';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.configUrl);
  }
  getDashChanged(){
    return this.sidebarChanged.next(this.toggleSidebar)
  }
  getToggle(){
    console.log(this.toggleSidebar)
    return this.toggleSidebar;
  }


}
