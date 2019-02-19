import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicCalculatorComponent } from './basic-calculator/basic-calculator.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TravelingPlaylistComponent } from './traveling-playlist/traveling-playlist.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  // { path: 'basic-calculator', component: BasicCalculatorComponent },
  { path: 'traveling-playlist', component: TravelingPlaylistComponent },
  // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
