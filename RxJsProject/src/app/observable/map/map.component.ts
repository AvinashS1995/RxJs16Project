import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

// Subscription
  sub1! : Subscription; 
  sub2! : Subscription; 

// Message
  msg1 : any ;
  msg2 : any ;
 
  constructor(private _designUtility : DesignUtilityService){ }

  ngOnInit(): void {

    // Ex : 01 
    const broadCastVideo = interval(1000);

    this.sub1 = broadCastVideo.pipe(
      map(data => 'Video ' + data)
      )
    .subscribe( res => {
      // console.log(res);
      this.msg1 = res;
    })

    setTimeout(() => {
      this.sub1.unsubscribe()
    },8000)

     // Ex : 02
     this.sub2 = broadCastVideo.pipe(
      map(data => data * 8)
      )
    .subscribe( res => {
      // console.log(res);
      this.msg2 = res;
    })

    setTimeout(() => {
      this.sub2.unsubscribe()
    },10000)

    // Ex : 03

    const members = from([
      {id : 1 , name : 'Avi'},
      {id : 2 , name : 'Ash'},
      {id : 3 , name : 'Archana'},
      {id : 4 , name : 'Ashwini'},
      {id : 5 , name : 'Maoti'},
      {id : 6 , name : 'Ishwer'},
      {id : 7 , name : 'Kapil'},
      {id : 8 , name : 'sarika'},
    ])

    members.pipe(map(data => data.name))
    .subscribe(res => {
      console.log(res);
      this._designUtility.print(res,'elContainer')
    })

  }

}
