<template>
  <nav class="bottom-nav">
    <router-link to="/" class="nav-btn" :class="{ active: $route.name === 'Dashboard' }" title="Dashboard">
      <span class="icon">🏠</span>
      <span class="label">Dashboard</span>
    </router-link>
    <router-link to="/profile" class="nav-btn" :class="{ active: $route.name === 'Profile' }" title="Mi Perfil">
      <span class="icon">👤</span>
      <span class="label">Perfil</span>
    </router-link>
    <router-link to="/family-tree" class="nav-btn" :class="{ active: $route.name === 'FamilyTree' }" title="Árbol Familiar">
      <span class="icon">🌳</span>
      <span class="label">Árbol</span>
    </router-link>
    <router-link to="/journal" class="nav-btn" :class="{ active: $route.name === 'Journal' }" title="Mi Viaje">
      <span class="icon">📔</span>
      <span class="label">Viaje</span>
    </router-link>
    <router-link to="/family-feed" class="nav-btn" :class="{ active: $route.name === 'FamilyFeed' }" title="Feed Familiar">
      <span class="icon">📰</span>
      <span class="label">Feed</span>
    </router-link>
    <router-link to="/memory-tree" class="nav-btn" :class="{ active: $route.name === 'MemoryTree' }" title="Árbol de Memoria">
      <span class="icon">🕊️</span>
      <span class="label">Memoria</span>
    </router-link>
    <router-link to="/vault" class="nav-btn" :class="{ active: $route.name === 'Vault' }" title="Bóveda">
      <span class="icon">🔐</span>
      <span class="label">Bóveda</span>
    </router-link>
    <router-link to="/chat" class="nav-btn" :class="{ active: $route.name === 'Chat' }" title="Mensajes">
      <span class="icon">💬</span>
      <span class="label">Chat</span>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.bottom-nav {
  display: none;
}

@media (max-width: 768px) {
  .bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    border-top: 1px solid rgba(220, 174, 69, 0.2);
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
    z-index: 1000;
    height: 70px;
  }

  .nav-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #999999;
    transition: all 0.3s ease;
    cursor: pointer;
    gap: 4px;
    padding: 8px;
    border-top: 3px solid transparent;
  }

  .nav-btn:hover {
    color: #dcae45;
    background-color: rgba(220, 174, 69, 0.05);
  }

  .nav-btn.active {
    color: #dcae45;
    border-top-color: #dcae45;
    background-color: rgba(220, 174, 69, 0.08);
  }

  .icon {
    font-size: 24px;
  }

  .label {
    font-size: 11px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
}
</style>
