import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RocketsService } from 'services/rockets.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  launch="";
  land="";
  date="";
  allYears=new Set;
  chageLaunch(val){
    if(this.launch==val)
    {
      this.launch="";
      this._router.navigate([], {queryParams: {launch_success: null}, queryParamsHandling: 'merge'});
    } 
    else 
    {
      this.launch=val;
      this._router.navigate([''],
      { relativeTo: this._route, queryParams: { 'launch_success': this.launch }, queryParamsHandling: 'merge',});

    }
  }
  chageDate(val){
    if(this.date!=val)
    {
      this.date=val;
      this._router.navigate([], {queryParams: {launch_year: val}, queryParamsHandling: 'merge'});
    }
    else{
      this.date="";
      this._router.navigate([], {queryParams: {launch_year: null}, queryParamsHandling: 'merge'});
    }
  }
  chageLand(val){
    if(this.land==val)
    {
      this.land="";
      this._router.navigate([], {queryParams: {land_success: null}, queryParamsHandling: 'merge'});
    } 
    else 
    {
      this.land=val;
      this._router.navigate([''],
      { relativeTo: this._route, queryParams: { 'land_success': this.land }, queryParamsHandling: 'merge',});

    }
  }

  constructor(private _router: Router,private _route: ActivatedRoute,private _rocket:RocketsService) { 
    this._route.queryParams
      .subscribe(params => {
        this.land=params.land_success;
        this.launch=params.launch_success;
        this.date=params.launch_year;
      }
    );

    this._rocket.getAll({}).subscribe((data) => {
      let launches = <any>data;
      let launchesCount = (<any>data).length;

      for (let i = 0; i < launches.length; i++) {
        this.allYears.add(launches[i].launch_year);
      }

    });
  }

  ngOnInit() {}
}
