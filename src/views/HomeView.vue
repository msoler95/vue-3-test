
<script setup>
import {ref} from 'vue'
import ProfileCard from '@/components/ProfileCard.vue'

  const people = ref([{
    name: 'Marc'
  }, {
    name: 'Luuk'
  }])
</script>

<template>
  <profile-card v-for="person in people" :name="person.name" :key="person.name"></profile-card>
</template>
