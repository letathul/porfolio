import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit {
  about: string = '';

  constructor(private profileServive: ProfileDataService) {}

  ngOnInit(): void {
    this.about = this.profileServive.data.summary;
  }
}
