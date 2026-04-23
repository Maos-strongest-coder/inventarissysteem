<script setup lang="ts">
import {useRouter} from 'vue-router';
import {useInventoryStore, type product} from '../store';
import InventoryForm from '../components/InventoryForm.vue';

const {addProduct} = useInventoryStore();

const router = useRouter();

const handleAdd = (newProduct: product) => {
    addProduct(newProduct);
    router.push('/');
};
</script>

<template>
    <h2>Product Toevoegen</h2>
    <InventoryForm button-text="Toevoegen" @submit="handleAdd" @cancel="router.push('/')" />
</template>
