import { Component, OnInit } from '@angular/core';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-crypto-manager',
  templateUrl: './crypto-manager.component.html',
  styleUrls: ['./crypto-manager.component.css']
})
export class CryptoManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  getSHA256(stringToHash: string){
    return sha256(stringToHash);
  }

}
