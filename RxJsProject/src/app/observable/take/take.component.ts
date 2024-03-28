import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit{

  
  randomNames = ['Avi', 'Ash', 'Archana', 'Ishwer', 'Maroti', 'Kapil', 'Ashwini', 'Sarika' ];

  constructor(private _designUtility : DesignUtilityService) { }
  
  ngOnInit(): void {
  
    // const source = interval(1000);

    const nameSource = from(this.randomNames)

    // Ex : 01 | Take(5)
    nameSource.pipe(take(7))
    .subscribe(res => {
      console.log(res);

      this._designUtility.print(res,'elContainer1')
    })

    // Ex : 02 | TakeLast(6)
    nameSource.pipe(takeLast(6))
    .subscribe(res => {
      console.log(res);

      this._designUtility.print(res,'elContainer2')
    })

    // Ex : 03 | TakeUntil(5)

    const source = interval(1000);

    const condition1 = timer(5000)

    const condition2 = fromEvent(document,'click')

    source.pipe(
      map(res => 'Numbers ' + res),
      takeUntil(condition2))
    .subscribe(res => {
      console.log(res);

      this._designUtility.print(res,'elContainer3')
    })


  }
}
