webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail-user/detail-user.module": [
		154
	],
	"../pages/user/user.module": [
		158
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserPageModule", function() { return DetailUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_user__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailUserPageModule = /** @class */ (function () {
    function DetailUserPageModule() {
    }
    DetailUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_user__["a" /* DetailUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_user__["a" /* DetailUserPage */]),
            ],
        })
    ], DetailUserPageModule);
    return DetailUserPageModule;
}());

//# sourceMappingURL=detail-user.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DetailUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailUserPage = /** @class */ (function () {
    function DetailUserPage(navCtrl, navParams, alertController, camera, itemsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.camera = camera;
        this.itemsProvider = itemsProvider;
        this.user = {};
        this.getParamsUser = {};
        this.newUser = false;
        this.getParamsUser = this.navParams.get('item'); //recebe os parametros da page user
        this.newUser = this.navParams.get('newUser'); //recebe o parametro para saber se o sera um novo usuario, ou a alteracao de uma
        //se possuir parametros, ele os adiciona ao ngModel
        if (this.getParamsUser)
            this.user = this.getParamsUser;
    }
    DetailUserPage.prototype.saveUser = function (user) {
        //verifica se o formulario será para um novo usuário ou para alteracao de um usuario
        (this.newUser) ? this.addUser(user) : this.editUser(user);
    };
    //teste de campos vazios e chamado da funcao de adicionar usuario
    DetailUserPage.prototype.addUser = function (user) {
        if (!user.nome || !user.email) {
            this.showAlert('Prencha pelo menos os campos de Nome e E-mail.');
        }
        else {
            this.itemsProvider.add(user);
            this.backUserPage();
        }
    };
    //chamada funcao de editar usuario
    DetailUserPage.prototype.editUser = function (user) {
        this.itemsProvider.update(user);
        this.backUserPage();
    };
    /** Utilizado para pegar imagens quando utilizado por MOBILE */
    DetailUserPage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.user.imagem = 'data:image/jpg;base64,' + data;
            }, function (err) {
                _this.showAlert('Não é possível tirar foto');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    /** Utilizado para pegar imagens quando utilizado por WEB */
    DetailUserPage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.user.imagem = imageData;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    /** Renderiza no style do html*/
    DetailUserPage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.user.imagem + ')';
    };
    //função para voltar a lista de usuario
    DetailUserPage.prototype.backUserPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */]);
    };
    /** Permitir apenas letras no input de nome */
    DetailUserPage.prototype.justLetters = function (e, evt) {
        try {
            if (evt) {
                var charCode = evt.keyCode;
            }
            else if (e) {
                charCode = e.which;
            }
            else {
                return true;
            }
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                return true;
            else
                return false;
        }
        catch (err) {
            alert(err.Description);
        }
    };
    /** Mostrar messagem de alerta */
    DetailUserPage.prototype.showAlert = function (msg) {
        var alert = this.alertController.create({
            title: msg,
            buttons: [
                {
                    text: 'Entendi',
                    role: 'cancel',
                    cssClass: 'alert-md',
                    handler: function (blah) {
                        console.log('Continuar Preenchendo');
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], DetailUserPage.prototype, "fileInput", void 0);
    DetailUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-user',template:/*ion-inline-start:"C:\Users\josie\Desktop\Dev\maisvida\src\pages\detail-user\detail-user.html"*/'<!--\n\n  Generated template for the DetailUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="backUserPage()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Dados pessoais</ion-title>\n\n    <button class="button-save" icon-only (click)="saveUser(user)">\n\n      SALVAR\n\n    </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h6 class="text-title">Dados pessoais</h6>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n\n\n      <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]"\n\n        (change)="processWebImage($event)" />\n\n      <div class="profile-image-wrapper" (click)="getPicture()">\n\n        <div class="profile-image-placeholder" *ngIf="!user.imagem">\n\n          <ion-icon name="camera"></ion-icon>\n\n        </div>\n\n        <div class="profile-image" name="imagem" [style.backgroundImage]="getProfileImageStyle()" *ngIf="user.imagem">\n\n        </div>\n\n      </div>\n\n\n\n      <ion-row>\n\n        <ion-col col-md-12 col-sm-12 col-lg-12>\n\n          <ion-item>\n\n            <ion-label stacked>Nome Completo</ion-label>\n\n            <ion-input required name="nome" [(ngModel)]="user.nome" (keypress)="justLetters($event, $this);"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-md-12 col-sm-12 col-lg-12>\n\n          <ion-item>\n\n            <ion-label stacked>Email</ion-label>\n\n            <ion-input required type="email" name="email" [(ngModel)]="user.email"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-md-6 col-sm-6 col-lg-6>\n\n          <ion-item>\n\n            <ion-label stacked>Nacionalidade</ion-label>\n\n            <ion-select class="ionselect" required name="nacionalidade" [(ngModel)]="user.nacionalidade" interface="popover">\n\n              <ion-option value="afegao">Afegão</ion-option>\n\n              <ion-option value="africano">Africano</ion-option>\n\n              <ion-option value="alemao">Alemão</ion-option>\n\n              <ion-option value="americano">Americano</ion-option>\n\n              <ion-option value="argentino">Argentino</ion-option>\n\n              <ion-option value="asiatico">Asiático</ion-option>\n\n              <ion-option value="auistraliano">Australiano</ion-option>\n\n              <ion-option value="austrico">Austríaco</ion-option>\n\n              <ion-option value="belga">Belga</ion-option>\n\n              <ion-option value="brasileiro" >Brasileiro</ion-option>\n\n              <ion-option value="britanico">Britânico</ion-option>\n\n              <ion-option value="chileno">Chileno</ion-option>\n\n              <ion-option value="chines">Chinês</ion-option>\n\n              <ion-option value="colombiano">Colombiano</ion-option>\n\n              <ion-option value="dinarmaques">Dinamarquês</ion-option>\n\n              <ion-option value="egipicio">Egípcio</ion-option>\n\n              <ion-option value="escoces">Escocês</ion-option>\n\n              <ion-option value="eslovaco">Eslovaco</ion-option>\n\n              <ion-option value="espanhol">Espanhol</ion-option>\n\n              <ion-option value="europeu">Europeu</ion-option>\n\n              <ion-option value="finlandes">Finlandês</ion-option>\n\n              <ion-option value="francesa">Francesa</ion-option>\n\n              <ion-option value="frances">Francês</ion-option>\n\n              <ion-option value="grego">Grego</ion-option>\n\n              <ion-option value="holandes">Holandês</ion-option>\n\n              <ion-option value="indiano">Indiano</ion-option>\n\n              <ion-option value="ingles">Inglês</ion-option>\n\n              <ion-option value="italiano">Italiano</ion-option>\n\n              <ion-option value="japones">Japonês</ion-option>\n\n              <ion-option value="mexicano">Mexicano</ion-option>\n\n              <ion-option value="polones">Polonês</ion-option>\n\n              <ion-option value="portugues">Português</ion-option>\n\n              <ion-option value="russo">Russo</ion-option>\n\n              <ion-option value="sueco">Sueco</ion-option>\n\n              <ion-option value="sulafricano">Sul-Africano</ion-option>\n\n              <ion-option value="sulacoreano">Sul-Coreano</ion-option>\n\n              <ion-option value="arabe">Árabe</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-md-6 col-sm-6 col-lg-6>\n\n          <ion-item class="select-size">\n\n            <ion-label stacked>Estado</ion-label>\n\n            <ion-select class="ionselect" required name="estado" [(ngModel)]="user.estado" interface="popover">\n\n              <ion-option value="AC">Acre</ion-option>\n\n              <ion-option value="AL">Alagoas</ion-option>\n\n              <ion-option value="AP">Amapá</ion-option>\n\n              <ion-option value="AM">Amazonas</ion-option>\n\n              <ion-option value="BA">Bahia</ion-option>\n\n              <ion-option value="CE">Ceará</ion-option>\n\n              <ion-option value="DF" selected>Distrito Federal</ion-option>\n\n              <ion-option value="ES">Espirito Santo</ion-option>\n\n              <ion-option value="GO">Goiás</ion-option>\n\n              <ion-option value="MA">Maranhão</ion-option>\n\n              <ion-option value="MT">Mato Grosso</ion-option>\n\n              <ion-option value="MS">Mato Grosso do Sul</ion-option>\n\n              <ion-option value="MG">Minas Gerais</ion-option>\n\n              <ion-option value="PA">Pará</ion-option>\n\n              <ion-option value="PB">Paraíba</ion-option>\n\n              <ion-option value="PR">Paraná</ion-option>\n\n              <ion-option value="PE">Pernambuco</ion-option>\n\n              <ion-option value="PI">Piauí</ion-option>\n\n              <ion-option value="RJ">Rio de Janeiro</ion-option>\n\n              <ion-option value="RN">Rio Grande do Norte</ion-option>\n\n              <ion-option value="RS">Rio Grande do Sul</ion-option>\n\n              <ion-option value="RO">Rondônia</ion-option>\n\n              <ion-option value="RR">Roraima</ion-option>\n\n              <ion-option value="SC">Santa Catarina</ion-option>\n\n              <ion-option value="SP">São Paulo</ion-option>\n\n              <ion-option value="SE">Sergipe</ion-option>\n\n              <ion-option value="TO">Tocantis</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-md-4 col-sm-4 col-lg-4>\n\n          <ion-item>\n\n            <ion-label stacked>Escolaridade</ion-label>\n\n            <ion-select class="ionselect"required name="escolaridade" [(ngModel)]="user.escolaridade" interface="popover">\n\n              <ion-option value="fundamental">Fundamental</ion-option>\n\n              <ion-option value="medio">Médio</ion-option>\n\n              <ion-option value="superior">Superior</ion-option>\n\n              <ion-option value="posgraduacao">Pós-graduação</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-md-4 col-sm-4 col-lg-4>\n\n          <ion-item>\n\n            <ion-label stacked>Situação conjugal</ion-label>\n\n            <ion-select class="ionselect" required name="estadoCivil" [(ngModel)]="user.estadoCivil" interface="popover">\n\n              <ion-option value="solteiro">Solteiro(a)</ion-option>\n\n              <ion-option value="casado">Casado(a)</ion-option>\n\n              <ion-option value="viuvo">Viúvo(a)</ion-option>\n\n              <ion-option value="divorciado">Divorciado(a)</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col col-md-4 col-sm-4 col-lg-4>\n\n          <ion-item>\n\n            <ion-label  stacked>Frenquenta escola</ion-label>\n\n            <ion-select class="ionselect" required name="frequentaEscola" [(ngModel)]="user.frequentaEscola" interface="popover">\n\n                <ion-option value="sim">Sim</ion-option>\n\n                <ion-option value="nao">Não</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-md-12 col-sm-12 col-lg-12>\n\n          <ion-item>\n\n            <ion-label stacked>Nome da mãe</ion-label>\n\n            <ion-input required name="nomeMae" [(ngModel)]="user.nomeMae"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-md-12 col-sm-12 col-lg-12>\n\n          <ion-item>\n\n            <ion-label stacked>Nome da pai</ion-label>\n\n            <ion-input required name="nomePai" [(ngModel)]="user.nomePai"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <!-- <ion-col col-md-12 col-sm-12 col-lg-12>\n\n        <ion-item>\n\n          <ion-label stacked>Data</ion-label>\n\n          <ion-input disabled name="data" [(ngModel)]="user.data"></ion-input>\n\n        </ion-item>\n\n      </ion-col> -->\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\josie\Desktop\Dev\maisvida\src\pages\detail-user\detail-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Items */]])
    ], DetailUserPage);
    return DetailUserPage;
}());

//# sourceMappingURL=detail-user.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__items_items__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__items_items__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Items = /** @class */ (function () {
    function Items(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.defaultItem = {
            "nome": "Alice Lime",
            "imagem": "assets/imgs/pessoas/f1.jpg",
            "nacionalidade": "americano",
            "email": "arlindo@gmail.com",
            "estado": "DF",
            "escolaridade": "superior",
            "estadoCivil": "solteiro",
            "frequentaEscola": "sim",
            "nomeMae": "Fernanda Mendez",
            "nomePai": "Paulo Alberto Neto",
            "data": "25/03/2019"
        };
        var items = [
            {
                "cod": "1",
                "nome": "Arlindo Neto",
                "imagem": "assets/imgs/pessoas/m5.jpg",
                "nacionalidade": "brasileiro",
                "email": "arlindo@gmail.com",
                "estado": "DF",
                "escolaridade": "superior",
                "estadoCivil": "solteiro",
                "frequentaEscola": "sim",
                "nomeMae": "Fernanda Mendez",
                "nomePai": "Paulo Alberto Neto",
                "data": "24/03/2019"
            },
            {
                "cod": "2",
                "nome": "Filipe Gonçalves",
                "imagem": "assets/imgs/pessoas/default.png",
                "nacionalidade": "brasileiro",
                "email": "filipe@gmail.com",
                "estado": "DF",
                "escolaridade": "medio",
                "estadoCivil": "solteiro",
                "frequentaEscola": "nao",
                "nomeMae": "Paula Mendez",
                "nomePai": "Rafael Junior",
                "data": "25/03/2019"
            },
            {
                "cod": "3",
                "nome": "Rodolfo Merlin",
                "imagem": "assets/imgs/pessoas/m3.jpg",
                "nacionalidade": "brasileiro",
                "email": "rodolfo@gmail.com",
                "estado": "DF",
                "escolaridade": "superior",
                "estadoCivil": "casado",
                "frequentaEscola": "nao",
                "nomeMae": "Lorena Feitosa",
                "nomePai": "João Gabriel",
                "data": "26/03/2019"
            },
            {
                "cod": "4",
                "nome": "Eva Mary",
                "imagem": "assets/imgs/pessoas/f2.jpg",
                "nacionalidade": "americano",
                "email": "evinha@gmail.com",
                "estado": "RS",
                "escolaridade": "superior",
                "estadoCivil": "solteiro",
                "frequentaEscola": "sim",
                "nomeMae": "Rinalva Alves",
                "nomePai": "Jhon Liro",
                "data": "27/03/2019"
            },
            {
                "cod": "5",
                "nome": "Lucinalva Alves",
                "imagem": "assets/imgs/pessoas/f3.jpg",
                "nacionalidade": "brasileiro",
                "email": "lucinha@gmail.com",
                "estado": "DF",
                "escolaridade": "superior",
                "estadoCivil": "solteiro",
                "frequentaEscola": "sim",
                "nomeMae": "Maria Oliveira",
                "nomePai": "Matheus Melo",
                "data": "28/03/2019"
            },
            {
                "cod": "6",
                "nome": "Gabriela de Melo",
                "imagem": "assets/imgs/pessoas/f1.jpg",
                "nacionalidade": "brasileiro",
                "email": "gabimelo@gmail.com",
                "estado": "DF",
                "escolaridade": "superior",
                "estadoCivil": "solteiro",
                "frequentaEscola": "sim",
                "nomeMae": "Fernanda Mendez",
                "nomePai": "Paulo Alberto Neto",
                "data": "29/03/2019"
            },
            {
                "cod": "7",
                "nome": "Paulo Fagundez",
                "imagem": "assets/imgs/pessoas/m4.jpg",
                "nacionalidade": "Cubano",
                "email": "paufadez@gmail.com",
                "estado": "DF",
                "escolaridade": "superior",
                "estadoCivil": "solteiro",
                "frequentaEscola": "sim",
                "nomeMae": "Sandra Faria",
                "nomePai": "Otavio Paulo",
                "data": "28/03/2019"
            },
            {
                "cod": "8",
                "nome": "Lorrana Gonçalvez",
                "imagem": "assets/imgs/pessoas/f5.jpg",
                "nacionalidade": "brasileiro",
                "email": "lorrana50@gmail.com",
                "estado": "DF",
                "escolaridade": "superior",
                "estadoCivil": "solteiro",
                "frequentaEscola": "sim",
                "nomeMae": "Polyana Mendez",
                "nomePai": "Filipe Gustavo",
                "data": "27/03/2019"
            },
            {
                "cod": "9",
                "nome": "Afonso Mesquita",
                "imagem": "assets/imgs/pessoas/m1.jpg",
                "nacionalidade": "brasileiro",
                "email": "afonso10@gmail.com",
                "estado": "DF",
                "escolaridade": "superior",
                "estadoCivil": "solteiro",
                "frequentaEscola": "sim",
                "nomeMae": "Lorrana Xavier",
                "nomePai": "Domingos Saraiva",
                "data": "26/03/2019"
            },
            {
                "cod": "10",
                "nome": "Fábio Rinaldo",
                "imagem": "assets/imgs/pessoas/m6.jpg",
                "nacionalidade": "brasileiro",
                "email": "fabio01@gmail.com",
                "estado": "DF",
                "escolaridade": "superior",
                "estadoCivil": "solteiro",
                "frequentaEscola": "sim",
                "nomeMae": "Paola Alves",
                "nomePai": "Thiago Xavier",
                "data": "25/03/2019"
            },
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            var prop_1 = "nome"; //filtro por nome
            return this.items.sort(function (a, b) { return a[prop_1].toLowerCase() > b[prop_1].toLowerCase() ? 1 : a[prop_1].toLowerCase() === b[prop_1].toLowerCase() ? 0 : -1; }); //order by para o array
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    //adicionar usuario
    Items.prototype.add = function (item) {
        var lastKey;
        for (var key in this.items) {
            if (lastKey < key)
                lastKey = key;
        }
        if (!item.imagem) {
            item.imagem = 'assets/imgs/pessoas/default.png';
        }
        ; //se não adiciona usuario com img, seta uma imagem default
        item.data = this.getDataNow();
        item.cod = parseInt(lastKey) + 2; //adicionando um código para o usuario (o numero será sempre o mais alto)
        this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        this.showToast('Usuário Adicionado!');
        return this.items;
    };
    //atualiza o usuario pelo codigo
    Items.prototype.update = function (item) {
        for (var key in this.items) {
            if (item.cod == this.items[key].cod) {
                this.items[key] = item;
            }
        }
        this.showToast('Usuário Alterado!');
    };
    //deletando o usuario pelo codigo
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.showToast('Usuário Deletado!');
    };
    //pega a data atual para adiciona na insercao do usuario
    Items.prototype.getDataNow = function () {
        var dateNow = new Date();
        var day = ("00" + dateNow.getDate()).slice(-2);
        var month = ("00" + (dateNow.getMonth() + 1)).slice(-2);
        var year = ("0000" + dateNow.getFullYear()).slice(-4);
        var date = day + '/' + month + '/' + year;
        return date;
    };
    /*
     * Regra de negócio para validade do orçamento
     */
    Items.prototype.getValidadeOrcamento = function (dias) {
        var hoje = new Date();
        var dataVenc = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
        return ("00" + dataVenc.getDate()).slice(-2) + "/" + ("00" + (dataVenc.getMonth() + 1)).slice(-2) + "/" + ("0000" + dataVenc.getFullYear()).slice(-4);
    };
    //Notifição usada no CRUD
    Items.prototype.showToast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 3000,
            position: 'top',
            cssClass: "toast_class",
        });
        toast.present();
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
            ],
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_user_detail_user_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_items_items__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-user/detail-user.module#DetailUserPageModule', name: 'DetailUserPage', segment: 'detail-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user_module__["UserPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_detail_user_detail_user_module__["DetailUserPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__providers_items_items__["a" /* Items */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Atribuição dos paramatros para este modelo
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_user_user__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_user_user__["a" /* UserPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\josie\Desktop\Dev\maisvida\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\josie\Desktop\Dev\maisvida\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\josie\Desktop\Dev\maisvida\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\josie\Desktop\Dev\maisvida\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_user_detail_user__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, viewCtrl, popoverController, alertController, items) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.items = items;
        this.trueSearch = false;
        this.moreInfo = false;
        this.char = {
            A: 'false', B: 'false', C: 'false', D: 'false', E: 'false', F: 'false', G: 'false', H: 'false', I: 'false',
            J: 'false', L: 'false', M: 'false', N: 'false', O: 'false', P: 'false', Q: 'false', R: 'false',
            S: 'false', T: 'false', U: 'false', V: 'false', W: 'false', X: 'false', Y: 'false', Z: 'false',
        };
        this.currentItems = this.items.query(); //recebe a lista de usuarios
        //define o group de ordenação por nome
        for (var key in this.currentItems) {
            var charAtual = this.currentItems[key].nome.substring(0, 1).toLocaleUpperCase();
            if (this.verifyGroup(charAtual)) {
                this.currentItems[key].group = charAtual;
            }
            else {
                this.currentItems[key].group = "";
            }
        }
    }
    /**  * Navega para tela para add um usuario da lista  */
    UserPage.prototype.addItem = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__detail_user_detail_user__["a" /* DetailUserPage */], {
            item: item, newUser: true
        });
    };
    /** Vai para a pagina de visualização do usuário   */
    UserPage.prototype.detailItem = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__detail_user_detail_user__["a" /* DetailUserPage */], {
            item: item, newUser: false
        });
    };
    /*  * Deleta um usuario da lista  */
    UserPage.prototype.deleteItem = function (item) {
        var _this = this;
        var alert = this.alertController.create({
            title: "Deseja excluir esse perfil?",
            message: 'Ao excluir esse perfil, todos os dados serão deletados e não poderão ser recuperados novamente. <br> Você tem certeza disso?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    cssClass: 'alert-md',
                    handler: function (blah) {
                        console.log('Exclusão Cancelada');
                    }
                }, {
                    text: 'Sim',
                    handler: function () {
                        _this.items.delete(item);
                        console.log('Exclusão Concluída');
                    }
                }
            ]
        });
        alert.present();
    };
    /**   * Mostra o input para pesquisa   */
    UserPage.prototype.searchOpen = function () {
        this.trueSearch = true;
    };
    /**  * Pesquisando os valores  */
    UserPage.prototype.search = function (ev) {
        var val = ev.target.value;
        if (val) {
            this.currentItems = this.items.query({ nome: val });
        }
        else {
            this.currentItems = this.items.query();
        }
    };
    /**  * Verifica a letra inical de cada nome do usuario  */
    UserPage.prototype.verifyGroup = function (char) {
        var charExists = false;
        switch (char) {
            case 'A':
                if (this.char.A == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.A = 'true');
                }
                ;
                break;
            case 'B':
                if (this.char.B == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.B = 'true');
                }
                ;
                break;
            case 'C':
                if (this.char.C == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.C = 'true');
                }
                ;
                break;
            case 'D':
                if (this.char.D == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.D = 'true');
                }
                ;
                break;
            case 'E':
                if (this.char.E == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.E = 'true');
                }
                ;
                break;
            case 'F':
                if (this.char.F == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.F = 'true');
                }
                ;
                break;
            case 'G':
                if (this.char.G == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.G = 'true');
                }
                ;
                break;
            case 'H':
                if (this.char.H == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.H = 'true');
                }
                ;
                break;
            case 'I':
                if (this.char.I == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.I = 'true');
                }
                ;
                break;
            case 'J':
                if (this.char.J == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.J = 'true');
                }
                ;
                break;
            case 'L':
                if (this.char.L == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.L = 'true');
                }
                ;
                break;
            case 'M':
                if (this.char.M == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.M = 'true');
                }
                ;
                break;
            case 'N':
                if (this.char.N == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.N = 'true');
                }
                ;
                break;
            case 'O':
                if (this.char.O == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.O = 'true');
                }
                ;
                break;
            case 'P':
                if (this.char.P == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.P = 'true');
                }
                ;
                break;
            case 'Q':
                if (this.char.Q == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.Q = 'true');
                }
                ;
                break;
            case 'R':
                if (this.char.R == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.R = 'true');
                }
                ;
                break;
            case 'S':
                if (this.char.S == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.S = 'true');
                }
                ;
                break;
            case 'T':
                if (this.char.T == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.T = 'true');
                }
                ;
                break;
            case 'U':
                if (this.char.U == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.U = 'true');
                }
                ;
                break;
            case 'V':
                if (this.char.V == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.V = 'true');
                }
                ;
                break;
            case 'W':
                if (this.char.W == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.W = 'true');
                }
                ;
                break;
            case 'X':
                if (this.char.X == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.X = 'true');
                }
                ;
                break;
            case 'Y':
                if (this.char.Y == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.Y = 'true');
                }
                ;
                break;
            case 'Z':
                if (this.char.Z == 'true') {
                    (charExists = false);
                }
                else {
                    (charExists = true, this.char.Z = 'true');
                }
                ;
                break;
        }
        return charExists;
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\josie\Desktop\Dev\maisvida\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Usuários</ion-title>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <div class="div-menu"> </div>\n\n    <ion-card-header>\n\n      <ion-row>\n\n\n\n        <div class="margin-auto">\n\n          <h2 col-4 class="margin-title">Usuários Cadastrados</h2>\n\n        </div>\n\n        <ion-searchbar *ngIf="trueSearch" col-6 (close)="test($event)" (ionInput)="search($event)"></ion-searchbar>\n\n        <button *ngIf="!trueSearch" class="button-search" (click)="searchOpen()">\n\n          <ion-icon class="icon-search" name="search" item-end></ion-icon>\n\n        </button>\n\n      </ion-row>\n\n\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n        <ion-item-group *ngFor="let item of currentItems">\n\n\n\n          <ion-row ion-item>\n\n            <button class="button-list cursor-default button-group-size" col-1>\n\n              <h2 class="group-size">{{item.group}}</h2>\n\n            </button>\n\n\n\n            <button class="button-list" col-1  (click)="detailItem(item)">\n\n              <ion-avatar>\n\n                <img [src]="item.imagem" />\n\n              </ion-avatar>\n\n            </button>\n\n\n\n            <button class="button-list border-item-bottom tooltip" col-10>\n\n              <ion-row>\n\n                <ion-col col-9 (click)="detailItem(item)">\n\n                  <h2 class="text-left">{{item.nome}}</h2>\n\n                  <p class="text-left"> {{item.email}}</p>\n\n                  <p class="text-left">{{item.nacionalidade}}</p>\n\n                </ion-col>\n\n\n\n                <ion-col col-3>\n\n                  <ion-row>\n\n                    <p item-end *ngIf="item.data" class="data-position">{{item.data}}</p>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <div class="tooltiptext">\n\n                      <div class="tooltiptext" (click)="deleteItem(item)" class="button-delete">Excluir Registro</div>\n\n                    </div>\n\n                    <ion-icon item-end name="more" class="more-position"></ion-icon>\n\n                  </ion-row>\n\n                </ion-col>\n\n              </ion-row>\n\n            </button>\n\n\n\n          </ion-row>\n\n        </ion-item-group>\n\n      </ion-list>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-fab>\n\n    <button ion-fab class="color-fab" (click)="addItem(item)">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\josie\Desktop\Dev\maisvida\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Items */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map