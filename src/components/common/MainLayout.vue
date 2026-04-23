<template>
  <div class="main-layout">
    <Sidebar ref="sidebar" />
    <div class="layout-content">
      <Topbar />
      <div class="screen-content">
        <slot />
      </div>
      <BottomNav />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import Topbar from './Topbar.vue'
import BottomNav from './BottomNav.vue'

const sidebar = ref(null)
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.layout-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.screen-content {
  flex: 1;
  overflow-y: auto;
  padding: 32px;
}

@media (max-width: 768px) {
  .main-layout {
    flex-direction: column;
  }

  .layout-content {
    flex: 1;
  }

  .screen-content {
    padding: 16px;
    padding-bottom: 90px;
  }
}
</style>


