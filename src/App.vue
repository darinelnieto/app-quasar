<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from './components/common/MainLayout.vue'
</script>

<style scoped>
#app {
  height: 100vh;
  overflow: hidden;
}
</style>
