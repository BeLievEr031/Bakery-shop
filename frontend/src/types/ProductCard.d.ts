interface IProduct {
    image: string;
    name: string;
    category: string;
    total: number;
    price: number;
}

interface IProductCard {
    product: IProduct
};
