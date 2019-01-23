import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicCalculatorComponent } from './basic-calculator/basic-calculator.component';

const routes: Routes = [
  { path: '', component: BasicCalculatorComponent },
  { path: 'basic-calculator', component: BasicCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
