// Import image
import avocado from '../../../public/products/avocado-1.jpg';
import strawberries from '../../../public/products/Strawberries-Header-OG.jpg';
import carrot from '../../../public/products/carrots-shutterstock_789443206.jpg';
import spinach from '../../../public/products/How-to-Grow-Spinach-Feature.jpg';
import tomato from '../../../public/products/tomatoseeds.jpg.webp';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    type: 'Fruit' | 'Vegetable';
}

const products: Product[] = [
    {
        id: 1,
        name: 'Avocado',
        description: 'Creamy fruit known for its healthy fats and smooth texture.',
        price: '$2.00',
        image: `${avocado.src}`,
        type: 'Fruit',
    },
    {
        id: 2,
        name: 'Strawberry',
        description: 'Red, juicy berries with a sweet taste, perfect for desserts.',
        price: '$3.00',
        image: `${strawberries.src}`,
        type: 'Fruit',
    },
    {
        id: 3,
        name: 'Carrot',
        description: 'Orange root vegetable known for its sweetness and high vitamin A content.',
        price: '$1.00',
        image: `${carrot.src}`,
        type: 'Vegetable',
    },
    {
        id: 4,
        name: 'Spinach',
        description: 'Leafy green vegetable rich in iron and vitamins.',
        price: '$3.00',
        image: `${spinach.src}`,
        type: 'Vegetable',
    },
    {
        id: 5,
        name: 'Tomato',
        description: 'Red, juicy fruit often used as a vegetable in cooking.',
        price: '$1.75',
        image: `${tomato.src}`,
        type: 'Vegetable',
    },
];

export default products;