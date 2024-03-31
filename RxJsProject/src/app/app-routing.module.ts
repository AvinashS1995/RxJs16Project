import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';

const routes: Routes = [
  {path : 'promise', component : PromiseComponent},
  {path : 'async-await', component : AsyncAwaitComponent},
  {path : 'observable', component : ObservableComponent, children : [
    
    {path : '', component : ListComponent},
    {path : 'fromEvent', component : FromEventComponent},
    {path : 'interval', component : IntervalComponent},
    {path : 'of-from', component : OfFromComponent},
    {path : 'to-array', component : ToArrayComponent},
    {path : 'custom-observable', component : CustomObservableComponent},
    {path : 'map', component : MapComponent},
    {path : 'pluck', component : PluckComponent},
    {path : 'filter', component : FilterComponent},
    {path : 'tap', component : TapComponent},
    {path : 'take', component : TakeComponent},
    {path : 'retry', component : RetryComponent},
    {path : 'debouncetime', component : DebouncetimeComponent},

  ]},
  {path : '**', redirectTo : 'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
