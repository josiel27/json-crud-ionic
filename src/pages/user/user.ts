import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, PopoverController, AlertController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import { DetailUserPage } from '../detail-user/detail-user';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  currentItems: Item[];
  trueSearch: any = false;
  moreInfo: any = false;
  char: any = {
    A: 'false', B: 'false', C: 'false', D: 'false', E: 'false', F: 'false', G: 'false', H: 'false', I: 'false',
    J: 'false', L: 'false', M: 'false', N: 'false', O: 'false', P: 'false', Q: 'false', R: 'false',
    S: 'false', T: 'false', U: 'false', V: 'false', W: 'false', X: 'false', Y: 'false', Z: 'false',
  };

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public popoverController: PopoverController,
    public alertController: AlertController,
    public items: Items
  ) {

    this.currentItems = this.items.query(); //recebe a lista de usuarios

    //define o group de ordenação por nome
    for (let key in this.currentItems) {
      let charAtual = this.currentItems[key].nome.substring(0, 1).toLocaleUpperCase();
      if (this.verifyGroup(charAtual)) { //verifica para cada inicial do nome o grupo
        this.currentItems[key].group = charAtual;
      }else{
        this.currentItems[key].group = "";
      }
    }

  }

  /**  * Navega para tela para add um usuario da lista  */
  addItem(item: Item) {
    this.navCtrl.setRoot(DetailUserPage, {
      item: item, newUser: true
    });
  }


  /** Vai para a pagina de visualização do usuário   */
  detailItem(item: Item) {
    this.navCtrl.setRoot(DetailUserPage, {
      item: item, newUser: false
    });
  }

  /*  * Deleta um usuario da lista  */
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

  /**   * Mostra o input para pesquisa   */
  searchOpen() {
    this.trueSearch = true;
  }

  /**  * Pesquisando os valores  */
  search(ev) {
    let val = ev.target.value;
    if (val) { //se for passado algum caractere
      this.currentItems = this.items.query({ nome: val });
    } else {//se não for passado algum caractere (botao close do search bar cai aqui)
      this.currentItems = this.items.query();
    }
  }

  /**  * Verifica a letra inical de cada nome do usuario  */
  verifyGroup(char) {
    let charExists = false;
    switch (char) {
      case 'A': if (this.char.A == 'true') { (charExists = false) } else { (charExists = true, this.char.A = 'true') }; break;
      case 'B': if (this.char.B == 'true') { (charExists = false) } else { (charExists = true, this.char.B = 'true') }; break;
      case 'C': if (this.char.C == 'true') { (charExists = false) } else { (charExists = true, this.char.C = 'true') }; break;
      case 'D': if (this.char.D == 'true') { (charExists = false) } else { (charExists = true, this.char.D = 'true') }; break;
      case 'E': if (this.char.E == 'true') { (charExists = false) } else { (charExists = true, this.char.E = 'true') }; break;
      case 'F': if (this.char.F == 'true') { (charExists = false) } else { (charExists = true, this.char.F = 'true') }; break;
      case 'G': if (this.char.G == 'true') { (charExists = false) } else { (charExists = true, this.char.G = 'true') }; break;
      case 'H': if (this.char.H == 'true') { (charExists = false) } else { (charExists = true, this.char.H = 'true') }; break;
      case 'I': if (this.char.I == 'true') { (charExists = false) } else { (charExists = true, this.char.I = 'true') }; break;
      case 'J': if (this.char.J == 'true') { (charExists = false) } else { (charExists = true, this.char.J = 'true') }; break;
      case 'L': if (this.char.L == 'true') { (charExists = false) } else { (charExists = true, this.char.L = 'true') }; break;
      case 'M': if (this.char.M == 'true') { (charExists = false) } else { (charExists = true, this.char.M = 'true') }; break;
      case 'N': if (this.char.N == 'true') { (charExists = false) } else { (charExists = true, this.char.N = 'true') }; break;
      case 'O': if (this.char.O == 'true') { (charExists = false) } else { (charExists = true, this.char.O = 'true') }; break;
      case 'P': if (this.char.P == 'true') { (charExists = false) } else { (charExists = true, this.char.P = 'true') }; break;
      case 'Q': if (this.char.Q == 'true') { (charExists = false) } else { (charExists = true, this.char.Q = 'true') }; break;
      case 'R': if (this.char.R == 'true') { (charExists = false) } else { (charExists = true, this.char.R = 'true') }; break;
      case 'S': if (this.char.S == 'true') { (charExists = false) } else { (charExists = true, this.char.S = 'true') }; break;
      case 'T': if (this.char.T == 'true') { (charExists = false) } else { (charExists = true, this.char.T = 'true') }; break;
      case 'U': if (this.char.U == 'true') { (charExists = false) } else { (charExists = true, this.char.U = 'true') }; break;
      case 'V': if (this.char.V == 'true') { (charExists = false) } else { (charExists = true, this.char.V = 'true') }; break;
      case 'W': if (this.char.W == 'true') { (charExists = false) } else { (charExists = true, this.char.W = 'true') }; break;
      case 'X': if (this.char.X == 'true') { (charExists = false) } else { (charExists = true, this.char.X = 'true') }; break;
      case 'Y': if (this.char.Y == 'true') { (charExists = false) } else { (charExists = true, this.char.Y = 'true') }; break;
      case 'Z': if (this.char.Z == 'true') { (charExists = false) } else { (charExists = true, this.char.Z = 'true') }; break;
    }
    return charExists;

  }
}
