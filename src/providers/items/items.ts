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

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      let prop = "nome"; //filtro por nome
      return this.items.sort((a, b) => a[prop].toLowerCase() > b[prop].toLowerCase() ? 1 : a[prop].toLowerCase() === b[prop].toLowerCase() ? 0 : -1); //order by para o array
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
