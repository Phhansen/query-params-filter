import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Ori and the blind forest',
        price: 9.99,
        platform: 'xbox',
        genre: 'platformer'
    },
    {
        id: 2,
        name: 'Spyro the dragon',
        price: 29.99,
        platform: 'playstation',
        genre: 'platformer'
    },
    {
        id: 3,
        name: 'Nioh',
        price: 59.99,
        platform: 'xbox',
        genre: 'rpg'
    },
    {
        id: 4,
        name: 'Final Fantasy VII',
        price: 59.99,
        platform: 'switch',
        genre: 'rpg'
    },
    {
        id: 5,
        name: 'Forza Horizons',
        price: 59.99,
        platform: 'xbox',
        genre: 'racing'
    },
    {
        id: 6,
        name: "Gran Turismo",
        price: 59.99,
        platform: 'playstation',
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