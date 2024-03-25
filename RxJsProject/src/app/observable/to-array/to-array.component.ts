import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSub!: Subscription;

  users = [

    { name: 'Avi', skill: 'Angular' },
    { name: 'Kapil', skill: 'Angular' },
    { name: 'Ashwini', skill: 'Angular' },
    { name: 'Archana', skill: 'Housewife' },

  ]

  ngOnInit(): void {

    //Ex - 01
    const source = interval(2000)

    this.sourceSub = source.pipe(
      take(10), toArray())
      .subscribe(res => {
        console.log('source =>', res);

        // if(res >=10){     // you can use toArray this codition is closed
        //   this.sourceSub.unsubscribe()
        // }
      })

    //Ex - 02

    const source2 = from(this.users)

    source2.pipe(toArray())
      .subscribe(res => {
        console.log(res);

      })

    //Ex - 03

    const source3 = of('Avi', 'Ash', 'Archana', 'Ishwer');

    source3.pipe(toArray())
      .subscribe(res => {
        console.log(res);

      })
  }
}
