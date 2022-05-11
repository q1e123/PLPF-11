import { Component } from '@angular/core';
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PLPF-11';

  getSHA256(stringToHash: string){
    return sha256(stringToHash);
  }

}
