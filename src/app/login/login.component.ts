import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  accountMap: Map<string, string>;

  constructor() {
    const savedAccounts = localStorage.getItem('accountMap');
    if (savedAccounts?.length){
      this.accountMap = JSON.parse(savedAccounts as string) || [];

    } else {
      this.accountMap = new Map<string, string>();
    }

   }

  ngOnInit(): void {
  }

}
