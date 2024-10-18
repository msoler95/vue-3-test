<script setup>
import { getPost } from '@/helpers/apiCall';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const event = ref({})
const props = defineProps({
    id: {
        required: true
    }
})
onMounted(async () => {
    event.value = await getPost(props.id)
})
</script>

<template>
    <div>
        {{ event }} 
    </div>  
</template>