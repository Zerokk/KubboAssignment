import { Injectable } from '@angular/core';
import { Warehouse } from 'interfaces/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  warehouses: Array<Warehouse> = [
    {id: 1, city: 'Madrid (Chamartín)', name: 'MAD-W1', country: 'España' },
    {id: 2, city: 'Madrid (Sol)', name: 'MAD-W2', country: 'España' },
    {id: 3, city: 'Barcelona (Pl. España)', name: 'BCN-W1', country: 'España' },
    {id: 4, city: 'Barcelona (El Prat)', name: 'BCN-W2', country: 'España' },
    {id: 5, city: 'Valencia (Centro)', name: 'VAL-W1', country: 'España' }
  ]

  constructor() { }


  getWarehouse(id): Promise<Warehouse>{
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const warehouse = this.warehouses.find( w => w.id === id);
          if(warehouse){
            resolve(warehouse);
          }else{
            throw "Warehouse not found";
          }
          
        }, 100); // some amount of latency, for emulating network-like behavior 
      } catch (err) {
        reject(err);
      }
    });
  }


}
