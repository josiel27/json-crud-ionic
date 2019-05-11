import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  currentItems: Item[];
  trueSearch: any = false;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }


  /**
   * Navega para tela para add um usuario da lista
   */
  addItem(item: Item) {
    // let addModal = this.modalCtrl.create('NewUserPage');
    // addModal.onDidDismiss(item => {
    //   if (item) {
    //     this.items.add(item);
    //   }
    // })
    // addModal.present();

    this.navCtrl.push('NewUserPage', {
      item: item
    });
  }

  /**
   * Deleta um usuario da lista
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Vai para a pagina de visualização do usuário
   */
  detailItem(item: Item) {
    console.log(item)
    this.navCtrl.push('DetailUserPage', {
      item: item
    });
  }

  searchOpen(){
    this.trueSearch = true;
  }

}
