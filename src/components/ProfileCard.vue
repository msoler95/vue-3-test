<script setup>
defineProps({
    name: {
        type: String
    }
})
</script>
<template>
    <div class="card">
        Name: {{ name }}
    </div>
</template>

<style scoped>
.card {
    padding: 10px;
    border: solid 1px;
    margin: 20px;
}
</style>