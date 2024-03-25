import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseVal: any;

  dell = {
    brand : 'Dell',
    hardDisk : '1TB',
    color : 'Black'
  }

  HP = {
    brand : 'HP',
    hardDisk : '1TB',
    color : 'silver'
  }
  notAvailable = {
    brand : 'Not Available',
    status : 'Failed'
  }

  ngOnInit(): void {

    // let buyLaptop = new Promise((resolve, reject) =>{
    //   reject('Promise is rejected')
    // })

    // buyLaptop.then(res =>{
    //   console.log('then code =>', res);  
    // }).catch(res =>{
    //   console.log('catch code =>', res);  
    // })    

    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          // resolve('Dell is Purchased')
          resolve(this.dell)
        }, 3000)
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          // resolve('HP is Purchased')
          resolve(this.HP)
        }, 3000)
      } else {
        return setTimeout(() => {
          // reject('Laptop is not Avialable in store')
          reject(this.notAvailable)
        }, 3000)
      }
    })

    buyLaptop.then(res =>{
        console.log('then code =>', res);
        this.promiseVal = res;  
      }).catch(res =>{
        console.log('catch code =>', res);
        this.promiseVal = res;  

      })    

  }


  dellAvailable() {
    return false
  }
  
  hpAvailable() {
    return true
    // return false

  }
}
