import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';

/**
 * Generated class for the DetailUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-user',
  templateUrl: 'detail-user.html',
})
export class DetailUserPage {
  user: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('item');
    console.log('AQUI')
    console.log(this.user)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailUserPage');
  
  }

}
