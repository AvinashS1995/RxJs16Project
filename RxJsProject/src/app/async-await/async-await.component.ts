import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit{
  promise: any;
  

  ngOnInit(): void {
    
    
    // console.log(this.getData());
    // this.getData().then(data => console.log(data));
    // this.getData().then(console.log);

    //async keyword with fuction always return promise

    let promise = new Promise((resolve,reject) => {
      return setTimeout(() =>{
        resolve('Data Received')
      })
    })
    this.getData()
  }
  
  async getData() {
    let res = await this.promise;
    console.log(res);
    
  }
}
