<script setup lang="ts">
import type {product} from '../store';

const props = defineProps<{
    inventory: product[];
}>();
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Aanwezig</th>
                <th>Vereist</th>
                <th>Acties</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in inventory" :key="product.id">
                <td>{{ product.name }}</td>
                <td><input type="number" min="0" v-model="product.actualAmount" /></td>
                <td>{{ product.requiredAmount }}</td>
                <td><RouterLink :to="'/edit/' + product.id">Bewerken</RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>
