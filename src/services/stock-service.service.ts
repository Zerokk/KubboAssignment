import { Injectable } from '@angular/core';
import { Stock } from 'interfaces/stock';
import { WarehouseService } from './warehouse-service.service';
import { Warehouse } from 'interfaces/warehouse';

@Injectable({
  providedIn: 'root'
})
export class StockService {


  constructor(
    private warehouseService: WarehouseService
  ) { }

  stocks: Array<Stock> = [
    {
      id: 1,
      productId: 1,
      warehouseId: 1,
      quantity: 49,
      status: ''
    },
    {
      id: 2,
      productId: 1,
      warehouseId: 2,
      quantity: 32,
      status: ''
    },
    {
      id: 3,
      productId: 1,
      warehouseId: 4,
      quantity: 21,
      status: ''
    },
    {
      id: 4,
      productId: 1,
      warehouseId: 5,
      quantity: 15,
      status: ''
    },
    {
      id: 5,
      productId: 2,
      warehouseId: 5,
      quantity: 28,
      status: ''
    },
    {
      id: 6,
      productId: 2,
      warehouseId: 4,
      quantity: 10,
      status: ''
    },
  ];




  async getStocksForProduct(productId, addWarehouseInfo?: boolean): Promise<Array<Stock>> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(async () => {
          let result;
          const prodStocks = this.stocks.filter(s => s.productId == productId);
          if (addWarehouseInfo) {
            result = await Promise.all(
              prodStocks.map(async (s: Stock) => {
                const warehouse = await this.warehouseService.getWarehouse(s.warehouseId);
                Object.assign(s, { 
                  city: warehouse.city, 
                  warehouseName: warehouse.name, 
                  country: warehouse.country 
                });
                return s;
              }));

          } else {
            result = this.stocks;
          }

          resolve(result);
        }, 150); // some amount of latency, for emulating network-like behavior 
      } catch (err) {
        reject(err);
      }
    });

  }


}
