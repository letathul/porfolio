import { ProfileDataService } from './../../service/profile-data.service';
import { Component, OnInit } from '@angular/core';

export type Experience = {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  description: string;
};

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css'],
})
export class ExperienceSectionComponent implements OnInit {
  experience: any;
  constructor(private profileService: ProfileDataService) {}

  ngOnInit(): void {
    this.experience = this.profileService.data.experience;
  }
}
