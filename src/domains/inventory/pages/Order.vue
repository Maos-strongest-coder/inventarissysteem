<script setup lang="ts">
import {useInventoryStore} from '../store';
import {computed} from 'vue';
import {useRouter} from 'vue-router';

const {inventory} = useInventoryStore();
const router = useRouter();

const productsToOrder = computed(() => {
    return inventory.value.filter(product => product.actualAmount < product.requiredAmount);
});

const calculateDeficit = (actual: number, required: number) => {
    return required - actual;
};
</script>

<template>
    <div>
        <h2>Bestellijst</h2>
        <p v-if="productsToOrder.length === 0">Alle producten zijn op voorraad.</p>

        <table v-else>
            <thead>
                <tr>
                    <td>Naam</td>
                    <td>Huidig</td>
                    <td>Vereist</td>
                    <td>Te bestellen</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in productsToOrder" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.actualAmount }}</td>
                    <td>{{ product.requiredAmount }}</td>
                    <td>{{ calculateDeficit(product.actualAmount, product.requiredAmount) }}</td>
                </tr>
            </tbody>
        </table>

        <br />
        <button @click="router.push('/')">Terug naar overzicht</button>
    </div>
</template>
