import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Excel } from 'src/app/Interface';
import {environment} from "../../../environments/enviroments.developers"
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(
    private http: HttpClient
  ) { }

  DownloadExcel(body:Object)
  {
    return this.http.post<Excel>(environment.server+"/Excel/download",body);
  }
}
