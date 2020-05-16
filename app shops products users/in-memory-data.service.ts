import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Shop } from './shop';
import { Injectable } from '@angular/core';

import {Product} from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
 const shops = [
      { id: 11, name: 'Coffee Island',address: 'Agioi Theodwroi 10,Petroupoli,14432', Ing: 30.5 , Iat: 54.44,tags:['Coffee','Espresso'],withdrawn:false},
      { id: 12, name: 'Coffee Bear',address: 'Valsamou 42,Kifisia,14675', Ing: 32.5 , Iat: 60.43,tags:['Coffee','Espresso'], withdrawn:false },
      { id: 13, name: 'Coffee Lab',address: 'Thiseas 10,Marousi,31313', Ing: 29.5 , Iat: 50.44, tags:['Coffee','Espresso'], withdrawn:false },
      { id: 14, name: 'Starbucks',address: 'Kifisias 7,Kifisia,12345', Ing: 27.8 , Iat: 37.9,tags:['Coffee','Espresso'], withdrawn:false  }
    ]; 
 
    return {shops};
  }
  
  
  /*
    const products = [
      {id:2, name: 'Barilia', description: 'Good Coffee', category :'Espresso', construct:'Industries' ,type:'Κόκοι' ,quantity: 32 ,tags:['Coffe','Espresso'], withdrawn: false},
      {id:3, name: 'Nespresso', description: 'Good Coffee', category :'Espresso',construct:'Industries' ,type:'Κόκοι' ,quantity: 32, tags:['Coffe','Espresso'], withdrawn: false},
      {id:4, name: 'Island', description: 'Good Coffee', category :'Cappuchino',construct:'Industries' ,type:'Κόκοι' ,quantity: 32, tags:['Coffe','Cappuchino'], withdrawn: false},
      {id:5, name: 'Lavanca', description: 'Good Coffee', category :'Espresso', construct:'Industries' ,type:'Κόκοι' ,quantity: 32, tags:['Coffe','Espresso'], withdrawn: false}
    ];
    return {products};  
  } 

  */
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
 
 /*genId(shops: Shop[]): number {
    return shops.length > 0 ? Math.max(...shops.map(shop => shop._id)) + 1 : 11;
  } 
  /*

 genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }    
  */

}
