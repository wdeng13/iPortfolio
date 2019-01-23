import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicCalculatorComponent } from './basic-calculator/basic-calculator.component';

const routes: Routes = [
  { path: 'iPortfolio', component: BasicCalculatorComponent },
  { path: 'basic-calculator', component: BasicCalculatorComponent },
  // { path: '', redirectTo: 'basic-calculator', pathMatch: 'full' },
  // { path: '**', redirectTo: 'basic-calculator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
