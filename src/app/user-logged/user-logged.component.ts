import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.css']
})
export class UserLoggedComponent implements OnInit {

  username = ''
  constructor() { 
    this.username = localStorage.getItem('currentUser') || '';
  }

  ngOnInit(): void {
  }

}
