import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Spyro the dragon',
        price: 19.99,
        platform: 'playstation',
        genre: 'platformer'
    },
    {
        id: 2,
        name: 'Final Fantasy VII',
        price: 39.99,
        platform: 'switch',
        genre: 'rpg'
    },
    {
        id: 3,
        name: 'Forza Horizons',
        price: 5.99,
        platform: 'xbox',
        genre: 'racing'
    }
];



@Injectable({ providedIn: "root" })
export class ProductsService {
    getProducts(filters: { platform: string, genre: string } = { platform: "", genre: "" }): Observable<Product[]> {
        const filteredProducts = PRODUCTS.filter(product => {
            return (filters.platform === "" ? true : filters.platform === product.platform ) && (filters.genre === "" ? true : filters.genre === product.genre)
        })

        return of(filteredProducts);
    }
}