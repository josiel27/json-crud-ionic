import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
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


  constructor(
    public toastCtrl: ToastController
  ) {
    let items = [
      {
        "cod": "1",
        "nome": "Arlindo Neto",
        "imagem": "assets/imgs/pessoas/m1.jpg",
        "nacionalidade": "brasileiro",
        "email": "arlindo@gmail.com",
        "estado": "DF",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "cod": "1",
        "nome": "Alberto Neves",
        "imagem": "assets/imgs/pessoas/m1.jpg",
        "nacionalidade": "brasileiro",
        "email": "arlindo@gmail.com",
        "estado": "DF",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "cod": "2",
        "nome": "Filipe Gonçalves",
        "imagem": "assets/imgs/pessoas/m2.jpg",
        "nacionalidade": "brasileiro",
        "email": "arlindo@gmail.com",
        "estado": "DF",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "cod": "3",
        "nome": "Rodolfo Merlin",
        "imagem": "assets/imgs/pessoas/m3.jpg",
        "nacionalidade": "brasileiro",
        "email": "arlindo@gmail.com",
        "estado": "DF",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "cod": "4",
        "nome": "Eva Mary",
        "imagem": "assets/imgs/pessoas/f2.jpg",
        "nacionalidade": "americano",
        "email": "arlindo@gmail.com",
        "estado": "DF",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "cod": "5",
        "nome": "Lucinalva Alves",
        "imagem": "assets/imgs/pessoas/f3.jpg",
        "nacionalidade": "brasileiro",
        "email": "arlindo@gmail.com",
        "estado": "DF",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "cod": "6",
        "nome": "Gabriela de Melo",
        "imagem": "assets/imgs/pessoas/f4.jpg",
        "nacionalidade": "brasileiro",
        "email": "arlindo@gmail.com",
        "estado": "DF",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "cod": "7",
        "nome": "Paulo Fagundez",
        "imagem": "assets/imgs/pessoas/m4.jpg",
        "nacionalidade": "Cubano",
        "email": "arlindo@gmail.com",
        "estado": "DF",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      }

    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      let prop = "nome"; //filtro por nome
      return this.items.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1); //order by para o array
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  //adicionar usuario
  add(item: Item) {
    var lastKey;
    for (let key in this.items) {
      if (lastKey < key)//correção para sempre pegar o ultimo numero
        lastKey = key;
    }
    if (!item.imagem) { item.imagem = 'assets/imgs/pessoas/default.png' }; //se não adiciona usuario com img, seta uma imagem default
    item.data = this.getDataNow();
    item.cod = parseInt(lastKey) + 2; //adicionando um código para o usuario (o numero será sempre o mais alto)
    this.items.push(new Item(item));
    this.showToast('Usuário Adicionado!')
    return this.items;
  }

  //atualiza o usuario pelo codigo
  update(item: Item) {
    for (let key in this.items) {
      if (item.cod == this.items[key].cod) {
        this.items[key] = item;
      }
    }
    this.showToast('Usuário Alterado!')
  }

  //deletando o usuario pelo codigo
  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.showToast('Usuário Deletado!')
  }

  //pega a data atual para adiciona na insercao do usuario
  getDataNow() {
    let dateNow = new Date();
    let day = ("00" + dateNow.getDate()).slice(-2);
    let month = ("00" + (dateNow.getMonth() + 1)).slice(-2);
    let year = ("0000" + dateNow.getFullYear()).slice(-4);
    let date = day + '/' + month + '/' + year;
    return date;
  }


  /*
   * Regra de negócio para validade do orçamento
   */
  getValidadeOrcamento(dias) {
    var hoje = new Date();
    var dataVenc = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
    return ("00" + dataVenc.getDate()).slice(-2) + "/" + ("00" + (dataVenc.getMonth() + 1)).slice(-2) + "/" + ("0000" + dataVenc.getFullYear()).slice(-4);
  }


  //Notifição usada no CRUD
  showToast(data: any) {
    let toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: 'top',
      cssClass: "toast_class",
    });
    toast.present();
  }
}
