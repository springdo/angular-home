import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-nav-bar',
  templateUrl: './tab-nav-bar.component.html',
  styleUrls: ['./tab-nav-bar.component.scss']
})
export class TabNavBarComponent implements OnInit {
  links = ['Home', 'Lights', 'Blinds', 'Cleaning', 'Notification'];
  activeLink = this.links[0];
  background = 'primary';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  constructor() {}

  ngOnInit() {}
}
