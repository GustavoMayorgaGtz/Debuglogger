import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Alert } from 'src/app/Interface';
import {environment} from "../../../environments/enviroments.developers"
@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(private http : HttpClient) { }

  CreateAlert(body: Object)
  {
    return this.http.post<Alert>(environment.server+"/Alert/createAlert",body);
  }
  UpdateAlert(body: Object)
  {
    return this.http.post<Alert>(environment.server+"/Alert/updateAlert",body);
  }
  GetAlert(body: Object)
  {
    return this.http.post<Alert>(environment.server+"/Alert/getAlert", body);
  }
}
