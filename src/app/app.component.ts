import { ProfileDataService } from './service/profile-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name: string = '';
  currentYear: number;

  constructor(private profileServive: ProfileDataService) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.name = this.profileServive.data.name;
  }

  title = 'porfolio';
}
