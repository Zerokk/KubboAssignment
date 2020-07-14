import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from 'services/product-service.service';
import { StockService } from 'services/stock-service.service';
import { MatTableModule } from '@angular/material/table';
import { KubboComponentsModule } from 'app/kubbo-components.module';
import {MatRadioModule} from '@angular/material/radio';


const routes: Routes = [
  {
    path: '',
    component: ViewProductComponent,
  }
]


@NgModule({
  declarations: [ViewProductComponent],
  imports: [
    CommonModule,
    KubboComponentsModule,
    MatTableModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ],
  providers: [ProductService, StockService]
})
export class ViewProductModule { }
