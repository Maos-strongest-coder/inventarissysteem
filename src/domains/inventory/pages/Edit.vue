<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router';
import InventoryForm from '../components/InventoryForm.vue';
import {useInventoryStore, type product} from '../store';

const router = useRouter();

const route = useRoute();

const {updateProduct, getProductById} = useInventoryStore();

const productId = Number(route.params.id);

const existingProduct = getProductById(productId);

const handleEdit = (updatedProduct: product) => {
    updateProduct(updatedProduct);
    router.push('/');
};
</script>

<template>
    <h2>Edit</h2>
    <InventoryForm
        v-if="existingProduct"
        :initial-data="existingProduct"
        button-text="Aanpassen"
        @submit="handleEdit"
        @cancel="router.push('/')"
    />
</template>
