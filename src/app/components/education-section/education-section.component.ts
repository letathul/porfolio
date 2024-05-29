import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css'],
})
export class EducationSectionComponent implements OnInit {
  constructor(private profileService: ProfileDataService) {}

  ngOnInit(): void {}
}
