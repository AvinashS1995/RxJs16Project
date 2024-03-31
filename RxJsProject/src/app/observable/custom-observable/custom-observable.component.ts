import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, count, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  techStatus: any;
  techStatus2: any;
  techStatus3: any;
  subscription!: Subscription;
  names : any ;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    // Ex : 01 (Manual)
    const custObs1 = Observable.create((observer: any) => {

      setTimeout(() => {
        observer.next('Angular')
      }, 1000)
      setTimeout(() => {
        observer.next('Javascript')
      }, 2000)
      setTimeout(() => {
        observer.next('HTML & CSS')
        // observer.complete()
      }, 3000)
      setTimeout(() => {
        observer.next('Typescript')

      }, 4000)
      setTimeout(() => {
        observer.next('Bootstrap')
        observer.error(new Error('Limit Exceed'))

      }, 5000)
      setTimeout(() => {
        observer.next('Angular Material')
      }, 6000)
    })

    custObs1.subscribe((res: any) => {
      // console.log(res);

      this._designUtility.print(res, 'elContainer')

    },
      (error: any) => {
        this.techStatus = 'error'
      },
      () => {
        this.techStatus = 'completed'
      }
    )



    // Ex : 02 (Custom Interval)

    const arr = ['Angular', 'Javascript', 'HTML & CSS', 'Angular Material', 'Bootstrap']

    const custObs2 = Observable.create((observer: any) => {

      let count = 0;
      setInterval(() => {

        observer.next(arr[count])

        if (count >= 3) {
          observer.complete()
          // observer.error('Error Emit')
        }
        count++
      }, 1000)
    })

    this.subscription = custObs2.subscribe((res: any) => {
      // console.log(res);

      this._designUtility.print(res, 'elContainer2')

    },
      (error: any) => {
        this.techStatus2 = 'error'
      },
      () => {
        this.techStatus2 = 'completed'
      })


      // Ex : 03 (Random Names)

      const arr2 = ['Avi','Ash','Archana','Ishwer','Kapil','Maroti','Ashwini']

      const custObs3 = Observable.create((observer:any) => {
        let count = 0
        setInterval(() =>{

          observer.next(arr2[count]);

          if(count >= 4){
            observer.error('Error Emit')
          }

          if(count >= 3){
            observer.complete()
          }
          count++
        },1000)
      })

      custObs3.subscribe((res:any) => {
        console.log(res);
        this.names = res;
        
      },
      
      (error: any) => {
        this.techStatus3 = 'error'
      },
      () => {
        this.techStatus3 = 'completed'
      })
  }
}
