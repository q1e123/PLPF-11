import { Component, OnInit } from '@angular/core';
import { sha256 } from 'js-sha256';

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

  accountMap: Map<string, string> = new Map();

  constructor() {
    
   }

  ngOnInit(): void {
  }

  login(){
    const savedAccounts = localStorage.getItem('accountMap');
    const listAccounts = JSON.parse(savedAccounts as string);
    if (savedAccounts){
      this.accountMap = new Map<string, string>(
        listAccounts.map((object: [string, string]) => {
          return [object[0], object[1]];
        }),
      );
    } else {
      this.accountMap = new Map<string, string>();
    }
    if(this.accountMap.has(this.username)){
      const hashedPassword = CryptoManagerComponent.getSHA256(this.password);
      if (hashedPassword === this.accountMap.get(this.username)){
        localStorage.setItem('currentUser', this.username);
        return;
      }
    }
    Swal.fire('Wrong credentials', 'Try again!', 'error');
  }

}
