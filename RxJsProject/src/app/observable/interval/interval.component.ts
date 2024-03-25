import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit{

  obsMes : any;
  videoSubscription! : Subscription  ;


  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {
    
    // const broadCastVideo = interval(1000)
    
    //timer(delay,interval)
    
    const broadCastVideo = timer(5000,1000)

    this.videoSubscription = broadCastVideo.subscribe(res =>{
      console.log(res);

      this.obsMes = 'Video ' + res;

      this._designUtility.print(this.obsMes, 'elContainer1')
      this._designUtility.print(this.obsMes, 'elContainer2')
      this._designUtility.print(this.obsMes, 'elContainer3')

      if( res >= 5){
        this.videoSubscription.unsubscribe()
      }
      
    })
  }
}
