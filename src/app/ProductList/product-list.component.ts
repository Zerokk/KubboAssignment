import { Component, OnInit } from '@angular/core';
import { ProductService } from 'services/product-service.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('clickOnProduct', [
      state('idle', style({
        color: '#595757',
        backgroundColor: 'white'
      })),
      state('clicked', style({
        color: 'black',
        backgroundColor: 'lightgray'
      })),
      transition('idle => clicked', [
        animate('0.5s')
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {

  columnsToDisplay = ['image', 'name', 'sku', 'barcode', 'enabled'];
  tableSource;
  currentPage = 0;
  pageLimit = 5;
  clickedEl;

  constructor(
    private productServ: ProductService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.updateTable();
  }

  async updateTable() {
    this.tableSource = await this.productServ.getProducts(this.currentPage, this.pageLimit);
  }

  async changePageSize(pageSize) {
    this.pageLimit = parseInt(pageSize);
    await this.updateTable();
  }

  viewProduct(product){
    setTimeout(() => this.router.navigateByUrl('product/'+product.id), 550)
  }

}
