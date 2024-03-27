import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  data: any;
  data2: any;
  data3: any;

  dataArr = [
    { id: 1, name: 'Avi', gender: 'Male' },
    { id: 2, name: 'Ash', gender: 'Female' },
    { id: 3, name: 'Archana', gender: 'Female' },
    { id: 4, name: 'Ishwer', gender: 'Male' },
    { id: 5, name: 'Kapil', gender: 'Male' },
    { id: 6, name: 'Maroti', gender: 'Male' },
    { id: 7, name: 'Ashwini', gender: 'Female' },
    { id: 8, name: 'Vishal', gender: 'Male' },
    { id: 9, name: 'Sarika', gender: 'Female' },
    { id: 10, name: 'Avinash', gender: 'Male' },
    { id: 11, name: 'Ritika', gender: 'Female' },
    { id: 12, name: 'Monu', gender: 'Male' },
    { id: 13, name: 'Ankush', gender: 'Male' },
    { id: 14, name: 'Rajesh', gender: 'Male' },
    { id: 15, name: 'Sunil', gender: 'Male' },
  ]


  ngOnInit(): void {

    const source = from(this.dataArr);

    // Ex : 01 - Filter by Length
    source.pipe(filter(members => members.name.length > 6), toArray())
      .subscribe(res => {
        console.log(res);
        this.data = res;
      })

    // Ex : 02 - Filter by Gender
    source.pipe(filter(members => members.gender === 'Female'), toArray())
      .subscribe(res => {
        console.log(res);
        this.data2 = res;
      })

    // Ex : 03 - Filter by nth item
    source.pipe(filter(members => members.id < 8), toArray())
      .subscribe(res => {
        console.log(res);
        this.data3 = res;
      })


  }


}