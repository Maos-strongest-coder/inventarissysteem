<script setup lang="ts">
import {useRouter} from 'vue-router';
import {useInventoryStore, type product} from '../store';
import InventoryForm from '../components/InventoryForm.vue';

const {addProduct, inventory} = useInventoryStore();

const router = useRouter();

let idCounter: number =  inventory.value.length


const handleAdd = (newProduct: product) => {
    newProduct.id = idCounter
    idCounter++
    addProduct(newProduct);
    router.push('/');
};
</script>

<template>
    <h2>Product Toevoegen</h2>
    <InventoryForm button-text="Toevoegen" @submit="handleAdd" @cancel="router.push('/')" />
</template>
