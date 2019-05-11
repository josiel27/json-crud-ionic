import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Alice Lime",
    "profilePic": "assets/imgs/pessoas/f1.jpg",
    "about": "Americana",
  };


  constructor() {
    let items = [
      {
        "name": "Arlindo Neto",
        "profilePic": "assets/imgs/pessoas/m1.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
      {
        "name": "Filipe Gonçalves",
        "profilePic": "assets/imgs/pessoas/m2.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
     
      {
        "name": "Rodolfo Merlin",
        "profilePic": "assets/imgs/pessoas/m3.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
      {
        "name": "Eva Mary",
        "profilePic": "assets/imgs/pessoas/f2.jpg",
        "about": "Americana",
        "note": "25/03/2019"
      },
      {
        "name": "Lucinalva Alves",
        "profilePic": "assets/imgs/pessoas/f3.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
      {
        "name": "Gabriela de Melo",
        "profilePic": "assets/imgs/pessoas/f4.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
      {
        "name": "Paulo Fagundez",
        "profilePic": "assets/imgs/pessoas/m4.jpg",
        "about": "Cubano",
        "note": "25/03/2019"
      },


      {
        "name": "Arlindo Neto",
        "profilePic": "assets/imgs/pessoas/m1.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
      {
        "name": "Filipe Gonçalves",
        "profilePic": "assets/imgs/pessoas/m2.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
     
      {
        "name": "Rodolfo Merlin",
        "profilePic": "assets/imgs/pessoas/m3.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
      {
        "name": "Eva Mary",
        "profilePic": "assets/imgs/pessoas/f2.jpg",
        "about": "Americana",
        "note": "25/03/2019"
      },
      {
        "name": "Lucinalva Alves",
        "profilePic": "assets/imgs/pessoas/f3.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
      {
        "name": "Gabriela de Melo",
        "profilePic": "assets/imgs/pessoas/f4.jpg",
        "about": "Brasileira",
        "note": "25/03/2019"
      },
      {
        "name": "Paulo Fagundez",
        "profilePic": "assets/imgs/pessoas/m4.jpg",
        "about": "Cubano",
        "note": "25/03/2019"
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
