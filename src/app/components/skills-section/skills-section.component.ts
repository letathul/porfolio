import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent implements OnInit {
  skills: any;
  constructor(private profileService: ProfileDataService) {}

  ngOnInit(): void {
    this.skills = this.profileService.data.skills;
  }
}
