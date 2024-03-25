import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path : 'promise', component : PromiseComponent},
  {path : 'async-await', component : AsyncAwaitComponent},
  {path : 'observable', component : ObservableComponent, children : [
    
    {path : '', component : ListComponent},
    {path : 'fromEvent', component : FromEventComponent},
  ]},
  {path : '**', redirectTo : 'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
