<template>
  <div class="memory-screen">
    <div class="memory-header">
      <img src="https://picsum.photos/seed/memorial1/160/160" class="memory-avatar" alt="Memory" />
      <div class="memory-info">
        <h2>Memory Profile</h2>
        <p class="subtitle">Honor and remember your loved ones who have passed</p>
        <button class="btn btn-primary">+ Add Memory Leaf</button>
      </div>
    </div>

    <div class="memory-layout">
      <div class="memory-main">
        <div class="media-grid">
          <div class="media-item wide" @click="lightboxIndex = 0">
          <img src="https://picsum.photos/seed/family01/600/300" class="media-real" alt="memory" />
        </div>
        <div class="media-item" @click="lightboxIndex = 1">
          <img src="https://picsum.photos/seed/family02/300/300" class="media-real" alt="memory" />
        </div>
        <div class="media-item" @click="lightboxIndex = 2">
          <img src="https://picsum.photos/seed/family03/300/300" class="media-real" alt="memory" />
        </div>
        <div class="media-item" @click="lightboxIndex = 3">
          <img src="https://picsum.photos/seed/family04/300/300" class="media-real" alt="memory" />
        </div>
        <div class="media-item" @click="lightboxIndex = 4">
          <img src="https://picsum.photos/seed/family05/300/300" class="media-real" alt="memory" />
        </div>
        <div class="media-item wide" @click="lightboxIndex = 5">
          <img src="https://picsum.photos/seed/family06/600/300" class="media-real" alt="memory" />
        </div>
        </div>
      </div>

      <div class="memory-side">
        <div class="journey-tree-label">Journey Tree</div>
        <MemoryCard
          name="Grandmother María Elena"
          dates="1945 - 2023"
          description="Family matriarch. Her legacy lives on in every family gathering."
          :media="['📸 45', '🎙️ 12', '📝 8']"
        />
        <MemoryCard
          name="Grandfather Carlos García"
          dates="1940 - 2020"
          description="Man of principles. His teachings guide our steps."
          :media="['📸 38', '🎥 5', '📝 10']"
        />
        <MemoryCard
          name="Aunt Rosa María"
          dates="1955 - 2022"
          description="The caring aunt who always brought joy to family gatherings."
          :media="['📸 22', '🎙️ 6']"
        />
      </div>
    </div>

    <ImageLightbox :images="memoryImages" v-model:currentIndex="lightboxIndex" @close="lightboxIndex = -1" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MemoryCard from '../components/memory/MemoryCard.vue'
import ImageLightbox from '../components/common/ImageLightbox.vue'

const lightboxIndex = ref(-1)
const memoryImages = [
  'https://picsum.photos/seed/family01/600/300',
  'https://picsum.photos/seed/family02/300/300',
  'https://picsum.photos/seed/family03/300/300',
  'https://picsum.photos/seed/family04/300/300',
  'https://picsum.photos/seed/family05/300/300',
  'https://picsum.photos/seed/family06/600/300',
]
</script>

<style scoped>
.memory-screen {
  max-width: 1100px;
  margin: 0 auto;
}

.memory-header {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 28px;
}

.memory-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid rgba(220, 174, 69, 0.3);
}

.memory-info h2 {
  font-family: var(--font-primary);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.subtitle {
  color: #666666;
  font-size: 13px;
  margin-bottom: 12px;
}

.btn {
  padding: 9px 18px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;
}

.btn-primary {
  background-color: #dcae45;
  color: #0c1335;
}

.btn-primary:hover {
  background-color: #f0c777;
}

.memory-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.memory-main {
  flex: 1;
  min-width: 0;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;
}

.media-item {
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
}

.media-item:hover .media-real {
  opacity: 0.85;
}

.media-item.wide {
  grid-column: span 2;
  aspect-ratio: 2 / 1;
}

.media-real {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.memory-side {
  width: 280px;
  flex-shrink: 0;
}

.journey-tree-label {
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 600;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  padding-left: 4px;
}

@media (max-width: 900px) {
  .memory-layout {
    flex-direction: column;
  }

  .memory-side {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .memory-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .media-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .media-item.wide {
    grid-column: span 2;
  }
}
</style>
