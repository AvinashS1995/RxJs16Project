import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News'])

    // Ex : 01 | Map

    source.pipe(
      map(res => this.getData(res))
    )
      .subscribe(res => {
        console.log(res);

        this._designUtility.print(res, 'elContainer')

      })

    // Ex : 03 | Map + mergeAll

    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    )
      .subscribe(res => {
        console.log(res);

        this._designUtility.print(res, 'elContainer2')

      })

    // Ex : 03 | mergeMap

    source.pipe(
      mergeMap(res => this.getData(res)),
    )
      .subscribe(res => {
        console.log(res);

        this._designUtility.print(res, 'elContainer3')

      })
  }

  getData(data: any) {
    return of(data + 'Video Uploaded')
  }
}
