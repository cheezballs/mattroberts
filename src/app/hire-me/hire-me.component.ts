import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.css']
})
export class HireMeComponent implements OnInit {

  emailLink = "mailto:sweetcrap" + String.fromCharCode(109) + "att" + "@" + "gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
