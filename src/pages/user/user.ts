import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, PopoverController, AlertController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import { DetailUserPage } from '../detail-user/detail-user';
// import { PopoverComponent } from '../../component/popover/popover.component';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  currentItems: Item[];
  trueSearch: any = false;
  moreInfo: any = false;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public popoverController: PopoverController,
    public alertController: AlertController,
    public items: Items
  ) {
    this.currentItems = this.items.query();
  }

  /**
   * Navega para tela para add um usuario da lista
   */
  addItem(item: Item) {
    this.navCtrl.setRoot(DetailUserPage, {
      item: item, newUser: true
    });
  }


  /**
   * Vai para a pagina de visualização do usuário
   */
  detailItem(item: Item) {
    this.navCtrl.setRoot(DetailUserPage, {
      item: item, newUser: false
    });
  }

  /**
    * Deleta um usuario da lista
    */
  // deleteItem(item) {
  //   this.items.delete(item);

  // }

   deleteItem() {
    const alert =  this.alertController.create({
      title: "Deseja excluir?",
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'as',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

     alert.present();
  }

  /**
   * Mostra o input para pesquisa
   */
  searchOpen() {
    this.trueSearch = true;
  }


  /**
  * Pesquisando os valores
  */
  search(ev) {
    let val = ev.target.value;
    // if (!val || !val.trim()) {
    //   this.currentItems = [];
    //   return;
    // }
    this.currentItems = this.items.query({
      nome: val
    });
  }
}
