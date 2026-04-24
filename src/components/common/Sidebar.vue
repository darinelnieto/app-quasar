<template>
  <aside class="sidebar">
    <div class="logo">
      Memory<span>Leaf</span>
    </div>

    <div class="nav-section">
      <div class="nav-label">Main</div>
      <router-link to="/" class="nav-item" :class="{ active: $route.name === 'Dashboard' }">
        <span class="nav-icon">🏠</span>
        <span>Dashboard</span>
      </router-link>
      <router-link to="/profile" class="nav-item" :class="{ active: $route.name === 'Profile' }">
        <span class="nav-icon">👤</span>
        <span>My Profile</span>
      </router-link>
      <router-link to="/family-tree" class="nav-item" :class="{ active: $route.name === 'FamilyTree' }">
        <span class="nav-icon">🌳</span>
        <span>Family Tree</span>
      </router-link>
    </div>

    <div class="nav-section">
      <div class="nav-label">Content</div>
      <router-link to="/journal" class="nav-item" :class="{ active: $route.name === 'Journal' }">
        <span class="nav-icon">📔</span>
        <span>My Journey</span>
      </router-link>
      <router-link to="/family-feed" class="nav-item" :class="{ active: $route.name === 'FamilyFeed' }">
        <span class="nav-icon">📰</span>
        <span>Family Feed</span>
      </router-link>
      <router-link to="/memory-tree" class="nav-item" :class="{ active: $route.name === 'MemoryTree' }">
        <span class="nav-icon">🕊️</span>
        <span>Memory Tree</span>
      </router-link>
    </div>

    <div class="nav-section">
      <div class="nav-label">Private</div>
      <router-link to="/vault" class="nav-item" :class="{ active: $route.name === 'Vault' }">
        <span class="nav-icon">🔐</span>
        <span>Vault</span>
      </router-link>
      <router-link to="/chat" class="nav-item" :class="{ active: $route.name === 'Chat' }">
        <span class="nav-icon">💬</span>
        <span>Messages</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  width: 280px;
  background: linear-gradient(135deg, #0c1335 0%, #1a1f4d 100%);
  border-right: 1px solid rgba(220, 174, 69, 0.3);
  padding: 24px 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.logo {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 700;
  color: #dcae45;
  margin-bottom: 32px;
  letter-spacing: 1px;
}

.logo span {
  color: #ffffff;
}

.nav-section {
  margin-bottom: 24px;
}

.nav-label {
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 600;
  color: #c5c5cb;
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  color: #c5c5cb;
  border-left: 3px solid transparent;
  text-decoration: none;
}

.nav-item:hover {
  background-color: rgba(220, 174, 69, 0.1);
  color: #dcae45;
}

.nav-item.active {
  background-color: rgba(220, 174, 69, 0.2);
  color: #dcae45;
  border-left-color: #dcae45;
}

.nav-icon {
  margin-right: 12px;
  font-size: 18px;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(220, 174, 69, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(220, 174, 69, 0.5);
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>


