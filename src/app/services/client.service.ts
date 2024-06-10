import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/Client.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public endpoint = 'Client'
  constructor(private http : HttpClient) { }

  getAllClient(){
    return this.http.get<any>(`${environment.apiURL}/${this.endpoint}/get-clients`)
  }

  uploadClient(client:Client[]){
    return this.http.post(`${environment.apiURL}/upload`,client)
  }
}
