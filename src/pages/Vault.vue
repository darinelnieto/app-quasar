<template>
  <div class="vault-screen">
    <div class="vault-top">
      <div>
        <h2>Vault</h2>
        <p class="subtitle">Your safe and private memories</p>
      </div>
      <button class="btn btn-primary">+ Upload</button>
    </div>

    <div class="storage-bar-wrap">
      <div class="storage-label">
        <span>Storage used</span>
        <span class="storage-num">650 MB / 1 GB</span>
      </div>
      <div class="storage-bar">
        <div class="storage-fill" style="width: 65%;"></div>
      </div>
    </div>

    <div class="filter-tabs">
      <button class="tab active">All</button>
      <button class="tab">Photos</button>
      <button class="tab">Videos</button>
      <button class="tab">Audio</button>
      <button class="tab">Docs</button>
    </div>

    <div class="vault-grid">
      <div class="vault-thumb" v-for="n in 16" :key="n" @click="lightboxIndex = n - 1">
        <img :src="`https://picsum.photos/seed/vault${n}/300/300`" :alt="`media ${n}`" class="thumb-img" />
      </div>
    </div>

    <ImageLightbox :images="vaultImages" v-model:currentIndex="lightboxIndex" @close="lightboxIndex = -1" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ImageLightbox from '../components/common/ImageLightbox.vue'

const lightboxIndex = ref(-1)
const vaultImages = computed(() => Array.from({ length: 16 }, (_, i) => `https://picsum.photos/seed/vault${i + 1}/300/300`))
</script>

<style scoped>
.vault-screen {
  max-width: 1000px;
  margin: 0 auto;
}

.vault-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

h2 {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--color-primary);
}

.subtitle {
  color: #666666;
  font-size: 14px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;
  flex-shrink: 0;
}

.btn-primary {
  background-color: #dcae45;
  color: #0c1335;
}

.btn-primary:hover {
  background-color: #f0c777;
}

.storage-bar-wrap {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 20px;
}

.storage-label {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #666666;
  margin-bottom: 8px;
}

.storage-num {
  font-weight: 600;
  color: var(--color-primary);
}

.storage-bar {
  width: 100%;
  height: 8px;
  background: rgba(220, 174, 69, 0.15);
  border-radius: 4px;
  overflow: hidden;
}

.storage-fill {
  height: 100%;
  background: linear-gradient(90deg, #dcae45, #f0c777);
  border-radius: 4px;
}

.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab {
  padding: 7px 16px;
  border-radius: 20px;
  border: 1px solid rgba(220, 174, 69, 0.3);
  background: #ffffff;
  font-size: 13px;
  font-family: var(--font-secondary);
  color: #666666;
  cursor: pointer;
  transition: all 0.2s;
}

.tab:hover {
  border-color: #dcae45;
  color: #dcae45;
}

.tab.active {
  background: #dcae45;
  border-color: #dcae45;
  color: #0c1335;
  font-weight: 600;
}

.vault-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.vault-thumb {
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
}

.vault-thumb:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .vault-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .vault-top {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
