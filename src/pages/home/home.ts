import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  status:string = 'initializing';
  constructor(public navCtrl: NavController) {

  }

  onLogin(){
    this.status = 'logged in';
  }

}
