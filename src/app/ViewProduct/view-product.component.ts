import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'services/product-service.service';
import { Product } from 'interfaces/product';
import { Stock } from 'interfaces/stock';
import { StockService } from 'services/stock-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product: Product;
  tableSource: Array<Stock>;
  columnsToDisplay: Array<string> = ['city', 'country', 'warehouseName', 'stock', 'stock-progress'];
  totalStock: number;
  finished: boolean = true;


  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private stocksService: StockService,
    private router: Router
  ) { }

  async ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.product = await this.productService.getProduct(id);
    this.tableSource = await this.stocksService.getStocksForProduct(id, true);
    this.totalStock = this.tableSource.reduce((prev, curr) => prev + curr.quantity, 0);
    this.finished = true; // for showing special messages in case no stocks are retrieved
  }


  goBack() {
    this.router.navigateByUrl("/");
  }

}
