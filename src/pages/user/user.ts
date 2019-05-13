import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, PopoverController, AlertController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import { DetailUserPage } from '../detail-user/detail-user';
import { group } from '@angular/core/src/animation/dsl';
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
  char: {
    A: false;
    B: false;
    C: false;
    D: false;
    E: false;
    F: false;
    G: false;
    H: false;
    I: false;
    J: false;
    L: false;
    M: false;
    N: false;
    O: false;
    P: false;
    Q: false;
    R: false;
    S: false;
    T: false;
    U: false;
    V: false;
    W: false;
    X: false;
    Y: false;
    Z: false;
  };
  a = 0;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public popoverController: PopoverController,
    public alertController: AlertController,
    public items: Items
  ) {
    this.currentItems = this.items.query();


    for (let key in this.currentItems) {
      this.currentItems[key].group = this.currentItems[key].nome.substring(0, 1);
      // for (let inc in this.char) {
        // if (!this.char[inc]) {

          // this.char[inc] = true;
        // } 
      }
      console.log(this.currentItems)
      console.log(this.char)
    // }

  }


  /**
  * Verifica a letra inical de cada nome do usuario
  */
  verifyCharacter(nameUser) {



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

  /*
  * Deleta um usuario da lista
  */
  deleteItem(item) {
    const alert = this.alertController.create({
      title: "Deseja excluir esse perfil?",

      message: 'Ao excluir esse perfil, todos os dados serão deletados e não poderão ser recuperados novamente. <br> Você tem certeza disso?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'alert-md',
          handler: (blah) => {
            console.log('Exclusão Cancelada');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.items.delete(item);
            console.log('Exclusão Concluída');
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
    this.currentItems = this.items.query({
      nome: val
    });
  }
}
