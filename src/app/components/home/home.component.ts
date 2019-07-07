import { ApiService } from './../../api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:Object;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getDatas().subscribe(data =>{

      this.users = data;
      console.log(this.users);

    })
  }

}
