import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit{


  data : any ;
  data2 : any ;

  users = [
    {
      name : 'Avi',
      skill : 'Angular',
      job : {
        title : 'Front End Developer',
        exp : '3 year'
      }
    },
    {
      name : 'Ash',
      skill : 'HTML & CSS',
      job : {
        title : 'UI/UX Developer',
        exp : '5 year'
      }
    },
    {
      name : 'Archaa',
      skill : 'React',
      job : {
        title : 'React Developer',
        exp : '8 year'
      }
    },
    {
      name : 'Ishwer',
      skill : 'Java',
      job : {
        title : 'Back End Developer',
        exp : '7 year'
      }
    },
    {
      name : 'Kapil',
      skill : 'Angular 16',
      job : {
        title : 'Sr. Front End Developer',
        exp : '10 year'
      }
    },
  ]

ngOnInit(): void {

  // Ex : 01
  from(this.users).pipe(
    // map(data => data.name),
    pluck('name'),
    toArray()
    )
  .subscribe(res => {
    console.log(res);
    this.data = res ;
    
  })

  // Ex : 02
  from(this.users).pipe(
    // map(data => data.name),
    pluck('job','title'),
    toArray()
    )
  .subscribe(res => {
    console.log(res);
    this.data2 = res ;
    
  })
}

}
