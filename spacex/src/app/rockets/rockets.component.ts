import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  import { RocketsService } from 'services/rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {


  rockets$;
  filters;
  constructor(private _rocket:RocketsService,private _router: Router,private _route: ActivatedRoute) { 
  //   _router.events.subscribe((val) => {
  //     // see also 
  //     console.log("url changed");
  // });

  }
  
  ngOnInit() {
    this._route.queryParams
      .subscribe(params => {
        this.filters=params;
        this.rockets$=this._rocket.getAll(this.filters);
      }
    );
    
  }

}
