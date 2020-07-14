import { Injectable } from '@angular/core';
import { Product } from 'interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products: Array<Product> = [
    { id: 1, name: "Skateboard", price: "80", barcode: "1234567890", sku: "SKU 53174223", enabled: true, image: "http://stockarch.com/files/12/03/skateboard.jpg" },
    { id: 2, name: "Linterna", price: "7", barcode: "7234563193", sku: "SKU 33147028", enabled: true, image: "http://img.pelican.com/img/products/light/7000/peli-super-bright-7000-led-tactical-torch.jpg" },
    { id: 3, name: "Altavoz inalámbrico", price: "60", barcode: "6004567891", sku: "SKU 73374610", enabled: false, image: "https://d243u7pon29hni.cloudfront.net/images/products/sony-srsxb10b-negro-altavoz-portatil-1363914-1_l.png" },
    { id: 4, name: "Libreta decorada", price: "4", barcode: "2954510015", sku: "SKU 16104720", enabled: true, image: "https://i.ytimg.com/vi/Er9kd2mQwvk/maxresdefault.jpg" },
    { id: 5, name: "Libreta simple", price: "2.5", barcode: "1054015013", sku: "SKU 66103726", enabled: false, image: "http://www.ideasstore.cl/wp-content/uploads/2015/06/PPN31-3.jpg" },
    { id: 6, name: "Cargador universal", price: "43.5", barcode: "8314710942", sku: "SKU 32704921", enabled: true, image: "http://i.ebayimg.com/images/i/400482819580-0-1/s-l1000.jpg" }
  ];




  async getProducts(page: number = 0, limit: number = 5): Promise<Array<Product>> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const prods = this.products.slice(
            page * limit,
            (page + 1) * limit
          );

          resolve(prods);
        }, 350); // some amount of latency, for emulating network-like behavior 
      } catch (err) {
        reject(err);
      }
    });

  }


  async getProduct(id: number): Promise<Product> {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const prod = this.products.find(p => p.id == id);
          if(prod){
            resolve(prod);
          }else{
            throw "Not found";
          }
        }, 180); // some amount of latency, for emulating network-like behavior 
      } catch (err) {
        reject(err);
      }
    });

  }


}
