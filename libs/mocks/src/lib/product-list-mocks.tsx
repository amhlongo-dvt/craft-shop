interface ProductListItem {
    id: string;
    title: string;
    image: string;
    price: number;
}

export const PRODUCT_LIST_MOCKS : Array<ProductListItem> = [
    {
        id: "1",
        title: "Product 1",
        image: "/assets/apple.jpg",
        price: 1.99
    },
    {
        id: "2",
        title: "Product 2",
        image: "/assets/orange.jpg",
        price: 2.5
    },
    {
        id: "3",
        title: "Product 3",
        image: "/assets/banana.jpg",
        price: 3.99
    }
]

export default PRODUCT_LIST_MOCKS;