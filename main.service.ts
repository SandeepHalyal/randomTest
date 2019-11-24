import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { appletter, allletersdata } from "./all-interface";
const url= "http://localhost:3300"

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  apiMiddleWareGet(path){
    return this.http.get(url+"/"+ path)
  }

  apiMiddlewarepPost(data: any, path){
    return this.http.post(url+"/"+ path, data)
  }
}
