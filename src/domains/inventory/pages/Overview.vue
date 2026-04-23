<script setup lang="ts">
import InventoryTable from '../components/InventoryTable.vue';
import {useInventoryStore} from '../store';

const {inventory} = useInventoryStore();
</script>

<template>
    <h2>Overzicht</h2>
    <nav>
        <RouterLink to="/add">Nieuw product toevoegen</RouterLink>
        |
        <RouterLink to="/order">Bestellijst</RouterLink>
    </nav>
    <InventoryTable :inventory="inventory" />
</template>
