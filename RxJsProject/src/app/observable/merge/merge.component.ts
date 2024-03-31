import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit{

constructor(private _designUtility : DesignUtilityService){ }

  ngOnInit(): void {
      
    const sourceTech = interval(2000).pipe(map(v => 'Tech Videos #' + (v+1)),take(5))
    const sourceComedy = interval(4000).pipe(map(v => 'Comedy Videos #' + (v+1)),take(3))
    const sourceNews = interval(2500).pipe(map(v => 'News Videos #' + (v+1)),take(4))

    const finalObs = merge(sourceTech,sourceComedy,sourceNews)

    finalObs.subscribe(res => {
      console.log(res);

      this._designUtility.print(res,'elContainer')
      
    })
  }

}
