import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit{


  subscription! : Subscription ;
  subscription2! : Subscription ;

  myColor : string = ''
  
  constructor(private _designUtility : DesignUtilityService){ }
  
  ngOnInit(): void {

    const source = interval(1000);
  
    // Ex : 01
    const arr = ['Avi', 'Ash', 'Archana', 'Ishwer', 'Maroti', 'Kapil', 'Ashwini', 'Sarika' ];

    this.subscription = source.pipe(
      tap(res =>{ 
        console.log('tap before =>' + res);
        if(res == 6){
          this.subscription.unsubscribe()
        }
      }),
      map(res => arr[res]),
      tap(res => console.log('tap after =>' + res))
    )
    .subscribe(res => {
      console.log(res);

      this._designUtility.print(res,'elContainer')
      
    })

    // Ex : 02
    const Colors = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Purple', 'Violet'];

    this.subscription2 = source.pipe( 
      tap(res => {
        this.myColor = Colors[res];
        console.log('tap => ' + res);
        if(res == 7){
          this.subscription2.unsubscribe()
        }
      }),
      map(res => Colors[res])
    )
    .subscribe(res => {
      console.log(res);

      this._designUtility.print(res,'elContainer2')
      
    })
  }
}
