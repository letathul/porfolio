import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/service/profile-data.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  profileName: string = '';
  headLine: string = '';
  titles: string[] = ['contact', 'about', 'experience', 'education', 'skills'];
  socialMediaEntries: { key: string; value: string }[] = [];

  constructor(private profileServive: ProfileDataService) {}

  ngOnInit(): void {
    this.profileName = this.profileServive.data.name;
    this.headLine = this.profileServive.data.headline;
    //this.socialMedias = Object.keys(this.profileServive.data.socialMedia);
    this.socialMediaEntries = Object.entries(
      this.profileServive.data.socialMedia
    ).map(([key, value]) => ({ key, value }));
  }
}
