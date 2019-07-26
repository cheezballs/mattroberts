import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [

    ]),
  ]
})
export class HeaderComponent implements OnInit {
  showMobileNavbar = false;

  constructor() {}

  ngOnInit() {}

  toggleMobileNavbar(): void {
    this.showMobileNavbar = !this.showMobileNavbar;
  }
}
