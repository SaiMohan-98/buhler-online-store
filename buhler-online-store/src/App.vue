<template>
  <AppHeader />
  <div class="content">
    <router-view />
  </div>
  
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>

<style scoped>
.content {
    flex: 1;
    overflow: auto;
    padding: 20px 40px;
}
</style>
