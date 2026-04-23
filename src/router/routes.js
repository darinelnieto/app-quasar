import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Profile from '../pages/Profile.vue'
import FamilyTree from '../pages/FamilyTree.vue'
import Journal from '../pages/Journal.vue'
import FamilyFeed from '../pages/FamilyFeed.vue'
import MemoryTree from '../pages/MemoryTree.vue'
import Vault from '../pages/Vault.vue'
import Chat from '../pages/Chat.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/family-tree',
    name: 'FamilyTree',
    component: FamilyTree
  },
  {
    path: '/journal',
    name: 'Journal',
    component: Journal
  },
  {
    path: '/family-feed',
    name: 'FamilyFeed',
    component: FamilyFeed
  },
  {
    path: '/memory-tree',
    name: 'MemoryTree',
    component: MemoryTree
  },
  {
    path: '/vault',
    name: 'Vault',
    component: Vault
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
