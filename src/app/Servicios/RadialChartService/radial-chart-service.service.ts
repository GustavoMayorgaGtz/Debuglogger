import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RadialChart } from 'src/app/Interface';
import {environment} from "../../../environments/enviroments.developers"
@Injectable({
  providedIn: 'root'
})
export class RadialChartServiceService {

  constructor(
    private http: HttpClient
  ) { }

  CreateRadialChart(body: Object)
  {
    return this.http.post<RadialChart>(environment.server+"/RadialChart/CreateRadialChart",body);
  }
  UpdateRadialChart(body: Object)
  {
    return this.http.post<RadialChart>(environment.server+"/RadialChart/updateRadialChart",body);
  }
  GetRadialChart(body: Object) 
  {
    return this.http.post<RadialChart>(environment.server+"/RadialChart/getRadialChart",body);
  }
}
