import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products$: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.products$ = this.route.queryParams.pipe(switchMap(params => {
      const filters = {
        platform: params.platform || "",
        genre: params.genre || ""
      };
      return this.productService.getProducts(filters);

    }));
  }
}
