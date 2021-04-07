import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { RocketsComponent } from './rockets/rockets.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    RocketsComponent
  ],
  
  imports: [
    RouterModule.forRoot([]),

    BrowserModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
