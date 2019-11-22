import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApodService } from '../apod.service';
import { Apod } from '../apod.model';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.page.html',
  styleUrls: ['./apod.page.scss'],
})
export class ApodPage {

  apod: Apod;
  date: string;

  constructor(
    private apodService: ApodService,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.route.params.subscribe(
      (params)=>{
        if(params['date']){
          this.getApod(params['date']);
        }else{
          var date=new Date;
          date.setDate(date.getDate()-1);
          this.getApod(date.toISOString().slice(0, 10));
        }
      }
    );
  }
  
  randomDate(start, end){

    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    return new Date(
      (date.getTime() - date.getTimezoneOffset()*60000)
    ).toISOString().slice(0, 10);
  }

  getApod(date:string):void {
    this.apodService.getApod(date)
      .subscribe((result:any) => {

        this.apod = result;

        this.date = this.randomDate(
          new Date(1995,5,16),
          new Date()
        );

      });
  }

}
