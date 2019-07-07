import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isHomeActive:boolean = true;
  isContactActive:boolean = false;
  isAboutActive:boolean = false;

  aboutClicked(){
    this.isHomeActive = false;
    this.isContactActive = false;
    this.isAboutActive = true;

  }
  contactClicked()
  {
    this.isHomeActive = false;
    this.isContactActive = true;
    this.isAboutActive = false;
  }
  homeClicked()
  {
    this.isHomeActive = true;
    this.isContactActive = false;
    this.isAboutActive = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
