import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "nome": "Alice Lime",
    "imagem": "assets/imgs/pessoas/f1.jpg",
    "nacionalidade": "Americana",
    "email": "arlindo@gmail.com",
    "estado": "df",
    "escolaridade": "superior",
    "estadoCivil": "solteiro",
    "frequentaEscola": "sim",
    "nomeMae": "Fernanda Mendez",
    "nomePai": "Paulo Alberto Neto",
    "data": "25/03/2019"
  };


  constructor() {
    let items = [
      {
        "nome": "Arlindo Neto",
        "imagem": "assets/imgs/pessoas/m1.jpg",
        "nacionalidade": "Brasileira",
        "email": "arlindo@gmail.com",
        "estado": "df",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "nome": "Filipe Gonçalves",
        "imagem": "assets/imgs/pessoas/m2.jpg",
        "nacionalidade": "Brasileira",
        "email": "arlindo@gmail.com",
        "estado": "df",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },

      {
        "nome": "Rodolfo Merlin",
        "imagem": "assets/imgs/pessoas/m3.jpg",
        "nacionalidade": "Brasileira",
        "email": "arlindo@gmail.com",
        "estado": "df",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "nome": "Eva Mary",
        "imagem": "assets/imgs/pessoas/f2.jpg",
        "nacionalidade": "Americana",
        "email": "arlindo@gmail.com",
        "estado": "df",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "nome": "Lucinalva Alves",
        "imagem": "assets/imgs/pessoas/f3.jpg",
        "nacionalidade": "Brasileira",
        "email": "arlindo@gmail.com",
        "estado": "df",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "nome": "Gabriela de Melo",
        "imagem": "assets/imgs/pessoas/f4.jpg",
        "nacionalidade": "Brasileira",
        "email": "arlindo@gmail.com",
        "estado": "df",
        "escolaridade": "superior",
        "estadoCivil": "solteiro",
        "frequentaEscola": "sim",
        "nomeMae": "Fernanda Mendez",
        "nomePai": "Paulo Alberto Neto",
        "data": "25/03/2019"
      },
      {
        "nome": "Paulo Fagundez",
        "imagem": "assets/imgs/pessoas/m4.jpg",
        "nacionalidade": "Cubano",
        "email": "arlindo@gmail.com",
        "estado": "df",
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
      return this.items;
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

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
