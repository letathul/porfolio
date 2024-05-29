import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProfilePicComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
