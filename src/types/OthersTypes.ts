export enum FilterType {
    Category = "Category",
    PriceMax = "PriceMax",
    PriceMin = "PriceMin",
    Promotion = "Promotion",
    Reset = "Reset",
};

export const INITIAL_STATE: FilterStateProps = [
    {type:FilterType.Category, name:""},
    {type:FilterType.PriceMax, max:0},
    {type:FilterType.PriceMin, min:0},
    {type:FilterType.Promotion, id:""},
]

export type FilterStateProps = [
    { type: FilterType.Category; name: string;},
    { type: FilterType.PriceMax; max: number;},
    { type: FilterType.PriceMin; min: number;},
    { type: FilterType.Promotion; id: string;},
];

export type actionFilterProps = { type: FilterType; payload: string}


export type ProductBase = {
    idProduct: number;
    category: string;
    img: string;
    title: string;
    price: number;
    withDiscount: boolean,
    units?: number;
    previousPrice?: number;
    priceInfo?: string;
    freeShipping: boolean;
    shippingPrice?: number;
    by?: string;
};

export type ProductOnCartProps = ProductBase;

export type ProductDB = {
    idProduct: number;
    category: string;
    description: string;
    img: string;
    colors: Array<string> ;
    brands: Array<string>;
    rating: number;
    title: string;
    price: number;
    inStock: boolean;
    prime: boolean;
    withDiscount: boolean;
    previousPrice?: number;
    priceInfo?: string;
    freeShipping: boolean;
    shippingPrice?: number;
    by?: string;
};
