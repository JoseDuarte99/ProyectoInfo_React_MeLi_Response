// TIPING THE PRODUCT-CART
export type ProductCartType = {
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
    onClickAdd?: () => void;
    onClickRemove?: () => void;
};

