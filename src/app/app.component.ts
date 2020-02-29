import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
