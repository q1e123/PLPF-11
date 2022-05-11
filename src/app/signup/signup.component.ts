import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username = '';
  password = '';

  accountMap: Map<string, string> = new Map();

  constructor() { }

  ngOnInit(): void {
  }

  addAccount(){
    const savedAccounts = localStorage.getItem('accountMap');
    this.accountMap = JSON.parse(savedAccounts as string) || [];
    this.accountMap.set(this.username, this.password);
    localStorage.setItem('accountMap', JSON.stringify(this.accountMap));
  }

}
