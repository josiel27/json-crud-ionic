import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import { UserPage } from '../user/user';

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
  public user: any = {};
  public getParamsUser: any = {};
  public newUser: any = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public itemsProvider: Items

  ) {


    this.getParamsUser = this.navParams.get('item'); //recebe os parametros da page user
    this.newUser = this.navParams.get('newUser'); //recebe o parametro para saber se o sera um novo usuario, ou a alteracao de uma

    //se possuir parametros, ele os adiciona ao ngModel
    if (this.getParamsUser)
      this.user = this.getParamsUser;

  }

  saveUser(user: Item) {
    //verifica se o formulario será para um novo usuário ou para alteracao de um usuario
    (this.newUser) ? this.addUser(user) : this.editUser(user);
  }

  addUser(user: Item) {
    this.itemsProvider.add(user);
    this.backUserPage();
  }

  editUser(user: Item) {
    this.backUserPage();
  }

  //função para voltar a lista de usuario
  backUserPage() {
    this.navCtrl.setRoot(UserPage);
  }
}
