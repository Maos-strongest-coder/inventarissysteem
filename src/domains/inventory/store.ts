import {ref} from 'vue';

export interface product {
    id: number;
    name: string;
    actualAmount: number;
    requiredAmount: number;
}

const inventory = ref<product[]>([
    {id: 0, name: 'kidney', actualAmount: 135, requiredAmount: 10},
    {id: 1, name: 'liver', actualAmount: 64, requiredAmount: 20},
    {id: 2, name: 'spleen', actualAmount: 21, requiredAmount: 30},
    {id: 3, name: 'galbladdder', actualAmount: 89, requiredAmount: 40},
    {id: 4, name: 'the will to live', actualAmount: 34, requiredAmount: 50},
    {id: 5, name: 'apple', actualAmount: 34, requiredAmount: 67},
    {id: 6, name: 'bread', actualAmount: 1, requiredAmount: 70},
]);

export const useInventoryStore = () => {
    const getProductById = (id: number) => inventory.value.find(p => p.id === id);

    const addProduct = (product: product) => {
        inventory.value.push(product);
    };

    const updateProduct = (updatedProduct: product) => {
        const index = inventory.value.findIndex(p => p.id === updatedProduct.id);

        if (index !== -1) inventory.value[index] = updatedProduct;
    };

    return {
        inventory,
        getProductById,
        addProduct,
        updateProduct,
    };
};
