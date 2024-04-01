import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

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

    // Ex : 02 | ConcatAll

    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    )
      .subscribe(res => {
        console.log(res);

        this._designUtility.print(res, 'elContainer2')

      })

    // Ex : 03 | ConcatAll

    source.pipe(
      concatMap(res => this.getData(res)),
    )
      .subscribe(res => {
        console.log(res);

        this._designUtility.print(res, 'elContainer3')
      })
  }

  getData(data: any) {
    return of(data + ' Video Uploaded').pipe(delay(2000))
  }

}
