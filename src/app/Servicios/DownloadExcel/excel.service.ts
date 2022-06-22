import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'body-parser';
import { response } from 'express';
import { Excel } from 'src/app/Interface';
import {environment} from "../../../environments/enviroments.developers"
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(
    private http: HttpClient
  ) { }

  DownloadExcel(body:Object)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
  let options = { headers: headers };
    
    return this.http.post<Excel>(environment.server+"/Excel/download",body, options);
  }
}
