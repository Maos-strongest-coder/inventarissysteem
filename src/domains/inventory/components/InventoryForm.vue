<script setup lang="ts">
import {onMounted, reactive} from 'vue';
import type {product} from '../store';

const props = defineProps<{
    initialData?: product;
    buttonText: string;
}>();

const emit = defineEmits(['submit', 'cancel']);

const formData = reactive<product>({
    id: 0,
    name: '',
    actualAmount: 0,
    requiredAmount: 0,
});

onMounted(() => {
    if (props.initialData) {
        Object.assign(formData, props.initialData);
    } else {
        formData.id = Math.floor(Math.random() * 10000);
    }
});

const handleSubmit = () => {
    emit('submit', {...formData});
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label>Naam</label>
            <input v-model="formData.name" required />
        </div>
        <div>
            <label>huidig aantal</label>
            <input type="number" v-model="formData.actualAmount" />
        </div>
        <div>
            <label>vereist aantal</label>
            <input type="number" v-model="formData.requiredAmount" />
        </div>

        <button type="submit">{{ buttonText }}</button>
        <button type="button" @click="$emit('cancel')">Annuleren</button>
    </form>
</template>
