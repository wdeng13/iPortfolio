import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './shared-module/material-module';

import { BasicCalculatorComponent } from './basic-calculator/basic-calculator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { TravelingPlaylistComponent } from './traveling-playlist/traveling-playlist.component';
import { ActivityComponent } from './activity/activity.component';
import { SkillComponent } from './skill/skill.component';
import { SummaryComponent } from './summary/summary.component';
import { AgmCoreModule } from '@agm/core';
import { config } from './config';

@NgModule({
  declarations: [
    AppComponent,
    BasicCalculatorComponent,
    PageNotFoundComponent,
    HomePageComponent,
    NavBarComponent,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    TravelingPlaylistComponent,
    ActivityComponent,
    SkillComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: config.GOOGLE_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
