<template>
  <div class="topbar">
    <div class="topbar-title">
      {{ screenTitle }}
    </div>
    <div class="topbar-actions">
      <div class="avatar">JD</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const screenTitles = {
  'Dashboard': 'Dashboard',
  'Profile': 'Mi Perfil',
  'FamilyTree': 'Árbol Familiar',
  'Journal': 'Mi Viaje',
  'FamilyFeed': 'Feed Familiar',
  'MemoryTree': 'Árbol de Memoria',
  'Vault': 'Bóveda',
  'Chat': 'Mensajes'
}

const screenTitle = computed(() => {
  return screenTitles[route.name] || 'Caslo'
})
</script>

<style scoped>
.topbar {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(220, 174, 69, 0.2);
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.topbar-title {
  font-family: var(--font-primary);
  font-size: 20px;
  font-weight: 600;
  color: var(--color-primary);
}

.topbar-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dcae45, #f0c777);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #0c1335;
  cursor: pointer;
  transition: all 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(220, 174, 69, 0.3);
}

@media (max-width: 768px) {
  .topbar {
    padding: 12px 16px;
  }

  .topbar-title {
    font-size: 16px;
  }
}
</style>


