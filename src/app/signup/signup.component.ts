import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { CryptoManagerComponent } from '../crypto-manager/crypto-manager.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

  addAccount(){
    if(this.accountMap.has(this.username)){
      Swal.fire('Account already exists!', 'Try to login', 'error');
      return;
    }
    this.password = CryptoManagerComponent.getSHA256(this.password);
    this.accountMap.set(this.username, this.password);
    localStorage.setItem('accountMap', JSON.stringify(this.accountMap));
    Swal.fire('Account creation was successful!', 'You can now login!', 'success');
  }

}
