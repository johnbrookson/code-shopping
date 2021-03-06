export interface Category{
    id?: number;
    name: string;
    readonly slug?: string;
    active: boolean;
    readonly created_at?: { date: string };
    readonly updated_at?: { date: string };
}

export interface Product{
    id?: number;
    name: string;
    description: string;
    price: number;
    readonly slug?: string;
    readonly stock: number;
    active: boolean;
    readonly created_at?: { date: string };
    readonly updated_at?: { date: string };
}

export interface ProductCategory {
    product: Product;
    categories: Category[];

}

export interface User{
    id?: number;
    name: string;
    email: string;
    password?: string,
    role?: number;
    active?: boolean;
    readonly created_at?: { date: string };
    readonly updated_at?: { date: string };
}

export interface Credentials {
    email: string,
    password: string
}