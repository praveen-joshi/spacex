import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  allLaunchUrl="https://api.spaceXdata.com/v3/launches?limit=100&";

  constructor(private _httpClient:HttpClient) { }

  getAll(filters){

    if(filters!="")
    {

      let filterString="";
      let filterCount=Object.keys(filters).length;
      for (let key in filters) {
        if (filters.hasOwnProperty(key)) {
            filterString+=key+"="+filters[key]+'&';
        }
      }
      filterString=filterString.substr(0,filterString.length-1)
      return this._httpClient.get(this.allLaunchUrl+filterString);
    }
    else
    {
      return this._httpClient.get(this.allLaunchUrl);
    }
  }

  // getSucessLand(){
  //   return this._httpClient.get(this.allLaunchUrl+"&land_success=true");
  // }

  // getSucessLaunch(){
  //   return this._httpClient.get(this.allLaunchUrl+"&launch_success=true");
  // }

  // getSucessLandLaunch(){
  //   return this._httpClient.get(this.allLaunchUrl+"&launch_success=true&land_success=true");
  // }

  // getSucessLandLaunchYear(year){
  //   return this._httpClient.get(this.allLaunchUrl+"&launch_success=true&land_success=true"+"&launch_year="+year);
  // }
  // getAllYear(year){
  //   return this._httpClient.get(this.allLaunchUrl+"&launch_success=true&land_success=true"+"&launch_year="+year);
  // }
}
