export interface Product {
    dealId?: string;
    id: number;
    name: string;
    seller: string;
    address: string;
    typeOfSell: 'Разовая продажа' | 'Аукцион'
    typeOfProduct: string;
    description: string;
    quantity: number;
    pricePerOne: number;
    favorite: boolean;
    isPayed: boolean;
}

