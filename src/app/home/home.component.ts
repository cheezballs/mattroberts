import { Component, OnInit } from '@angular/core';
import { faLinkedin, faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faLinkedin = faLinkedin;
  faFacebookSquare = faFacebookSquare;
  faGithub = faGithubSquare;

  constructor() { }

  ngOnInit() {
  }

}
