<template>
  <nav class="bottom-nav">
    <router-link to="/" class="nav-btn" :class="{ active: $route.name === 'Dashboard' }" title="Dashboard">
      <LayoutDashboard :size="22" />
      <span class="label">Home</span>
    </router-link>
    <router-link to="/profile" class="nav-btn" :class="{ active: $route.name === 'Profile' }" title="My Profile">
      <UserCircle :size="22" />
      <span class="label">Profile</span>
    </router-link>
    <router-link to="/family-tree" class="nav-btn" :class="{ active: $route.name === 'FamilyTree' }" title="Family Tree">
      <GitFork :size="22" />
      <span class="label">Tree</span>
    </router-link>
    <router-link to="/journal" class="nav-btn" :class="{ active: $route.name === 'Journal' }" title="My Journey">
      <BookOpen :size="22" />
      <span class="label">Journey</span>
    </router-link>
    <router-link to="/family-feed" class="nav-btn" :class="{ active: $route.name === 'FamilyFeed' }" title="Family Feed">
      <Rss :size="22" />
      <span class="label">Feed</span>
    </router-link>
    <router-link to="/memory-tree" class="nav-btn" :class="{ active: $route.name === 'MemoryTree' }" title="Memory Tree">
      <Heart :size="22" />
      <span class="label">Memory</span>
    </router-link>
    <router-link to="/vault" class="nav-btn" :class="{ active: $route.name === 'Vault' }" title="Vault">
      <Archive :size="22" />
      <span class="label">Vault</span>
    </router-link>
    <router-link to="/chat" class="nav-btn" :class="{ active: $route.name === 'Chat' }" title="Messages">
      <MessageCircle :size="22" />
      <span class="label">Chat</span>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { LayoutDashboard, UserCircle, GitFork, BookOpen, Rss, Heart, Archive, MessageCircle } from 'lucide-vue-next'

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
