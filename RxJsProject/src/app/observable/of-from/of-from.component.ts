import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit{

  obsMsg : any;

  constructor(private _designUtility : DesignUtilityService){ }


  
  ngOnInit(): void {
    
    // Of
    
    const obs1 = of('Avinash', 'Ashwini','Archana');
    
    const obs2 = of({a:'Avinash', b:'Ashwini', c:'Archana'});

    obs1.subscribe(res => {
      console.log('obs1 => ',res);
      this._designUtility.print(res,'elContanier');
      
    })

    obs2.subscribe(res => {
      console.log('obs2 => ',res);
      this.obsMsg = res;  
    })

    // from Array

   const obs3 = from(['Avinash', 'Ashwini','Archana']);

   obs3.subscribe(res => {
    console.log('obs3 =>', res);
    this._designUtility.print(res,'elContanier3')
    
   })

   // from Promise to Observable

   const promise  = new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 3000);
   })

   const obs4 = from(promise);

   obs4.subscribe(res => {
    console.log('obs4 =>',res); 
    this._designUtility.print(res,'elContanier4')
   })


   // from string

   const str = 'I am Developer'

   const obs5 = from(str)

   obs5.subscribe(res => {
    console.log('obs5 =>', res);
    this._designUtility.print(res,'elContanier5')
    
   })

  }

}
