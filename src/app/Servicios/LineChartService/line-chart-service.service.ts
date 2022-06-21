import { HttpClient } from '@angular/common/http';
import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { LineChart } from 'src/app/Interface';
import { environment } from 'src/environments/enviroments.developers';
@Injectable({
  providedIn: 'root'
})
export class LineChartServiceService {

  constructor(
    private http: HttpClient
  ) { }

  CreateLineChart(body: Object)
  {
    return this.http.post<LineChart>(environment.server+"/LineChart/CreateLineChart", body);
  }

  SetLineChart(body: Object)
  {
    return this.http.post<LineChart>(environment.server+"/LineChart/setDataLineChart",body);
  }

  GetLineChart(body: Object)
  {
    return this.http.post<LineChart>(environment.server+"/LineChart/GetLineChart",body);
  }
}
