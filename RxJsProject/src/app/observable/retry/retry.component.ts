import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit{

  person : any;
  fetching : boolean = false;
  status = 'No Data'

  constructor(private http : HttpClient){ }

  ngOnInit(): void {
    
  }

  getData(){
    this.fetching = true;
    this.status = 'Fetching Data...'
    this.http.get('https://dummyjson.com/users/1').pipe(
      // retry(2)
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount) =>{
          if(retryCount >= 5){
            throw err
          }else{
            retryCount = retryCount + 1 ;
            console.log('RetryCount => ' + retryCount);
            this.status = 'Retrying Attempt #' + retryCount
            return retryCount;
          }

        },0)
      ))
      )
    .subscribe((res) => {
      console.log(res);
      
      this.person = res
      this.fetching = false
      this.status = 'Data Fetched'
    },
    (err) =>{
      console.log(err);
      this.fetching = false
      this.status = 'Problem Fetching Data'

    })
  }

}
