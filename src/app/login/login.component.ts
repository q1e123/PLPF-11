import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { CryptoManagerComponent } from '../crypto-manager/crypto-manager.component';

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

  login(){
    if(this.accountMap.has(this.username)){
      if (this.password === this.accountMap.get(this.username)){
        localStorage.setItem('currentUser', this.username);
        return;
      }
    }
    Swal.fire('Wrong credentials', 'Try again!', 'error');
  }

}
