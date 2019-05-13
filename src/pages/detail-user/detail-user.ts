import { Component, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, AlertController, } from 'ionic-angular';
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
  @ViewChild('fileInput') fileInput;

  public user: any = {};
  public getParamsUser: any = {};
  public newUser: any = false;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertController: AlertController,
    public camera: Camera,
    public itemsProvider: Items

  ) {


    this.getParamsUser = this.navParams.get('item'); //recebe os parametros da page user
    this.newUser = this.navParams.get('newUser'); //recebe o parametro para saber se o sera um novo usuario, ou a alteracao de uma

    //se possuir parametros, ele os adiciona ao ngModel
    if (this.getParamsUser)
      this.user = this.getParamsUser;

    console.log(this.user)
  }

  saveUser(user: Item) {
    //verifica se o formulario será para um novo usuário ou para alteracao de um usuario
    (this.newUser) ? this.addUser(user) : this.editUser(user);
  }

  addUser(user: Item) {
    if (!user.nome || !user.email) { //verifica se esses campos estão vazios
      this.showAlert('Prencha pelo menos os campos de Nome e E-mail.');
    } else {
      this.itemsProvider.add(user);
      this.backUserPage();
    }
  }

  editUser(user: Item) {
    this.itemsProvider.update(user);
    this.backUserPage();
  }

  /** Utilizado para pegar imagens quando utilizado por MOBILE */
  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.user.imagem = 'data:image/jpg;base64,' + data;
      }, (err) => {
        this.showAlert('Não é possível tirar foto');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  /** Utilizado para pegar imagens quando utilizado por WEB */
  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      this.user.imagem = imageData;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  /** Renderiza no style do html*/
  getProfileImageStyle() {
    return 'url(' + this.user.imagem + ')'
  }

  //função para voltar a lista de usuario
  backUserPage() {
    this.navCtrl.setRoot(UserPage);
  }

  showAlert(msg) {
    const alert = this.alertController.create({
      title: msg,
      buttons: [
        {
          text: 'Entendi',
          role: 'cancel',
          cssClass: 'alert-md',
          handler: (blah) => {
            console.log('Continuar Preenchendo');
          }
        }
      ]
    });
    alert.present();
  }
}
