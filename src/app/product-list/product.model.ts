export interface Product {
    id: number;
    name: string;
    price: number;
    platform: 'playstation' | 'switch' | 'xbox';
    genre: 'rpg' | 'platformer' | 'racing';
  }