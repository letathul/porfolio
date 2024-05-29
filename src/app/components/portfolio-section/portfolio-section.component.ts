import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css'],
})
export class PortfolioSectionComponent implements OnInit {
  projects: any;
  constructor(private profileService: ProfileDataService) {}

  ngOnInit(): void {
    this.projects = this.profileService.data.projects;
  }
}
