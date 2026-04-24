<template>
  <Teleport to="body">
    <div
      v-if="images.length && currentIndex >= 0"
      class="lightbox-overlay"
      @click.self="$emit('close')"
      @keydown.escape="$emit('close')"
      @keydown.left="prev"
      @keydown.right="next"
      tabindex="0"
      ref="overlayRef"
      @mousedown="onDragStart"
      @mousemove="onDragMove"
      @mouseup="onDragEnd"
      @touchstart.passive="onTouchStart"
      @touchmove.passive="onTouchMove"
      @touchend="onTouchEnd"
    >
      <button class="lightbox-close" @click="$emit('close')">
        <X :size="22" />
      </button>

      <button v-if="images.length > 1" class="lightbox-nav prev" @click.stop="prev">
        <ChevronLeft :size="28" />
      </button>

      <div class="lightbox-img-wrap">
        <img
          :key="currentIndex"
          :src="images[currentIndex]"
          :alt="`Image ${currentIndex + 1}`"
          class="lightbox-img"
          :style="{ transform: `translateX(${dragOffset}px)`, transition: isDragging ? 'none' : 'transform 0.2s ease' }"
          draggable="false"
        />
      </div>

      <button v-if="images.length > 1" class="lightbox-nav next" @click.stop="next">
        <ChevronRight :size="28" />
      </button>

      <div v-if="images.length > 1" class="lightbox-dots">
        <span
          v-for="(_, i) in images"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click.stop="$emit('update:currentIndex', i)"
        ></span>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  images: { type: Array, default: () => [] },
  currentIndex: { type: Number, default: -1 }
})

const emit = defineEmits(['close', 'update:currentIndex'])

const overlayRef = ref(null)

// Focus overlay on open for keyboard events
watch(() => props.currentIndex, (val) => {
  if (val >= 0) {
    setTimeout(() => overlayRef.value?.focus(), 50)
  }
})

function prev() {
  if (props.currentIndex > 0) emit('update:currentIndex', props.currentIndex - 1)
  else emit('update:currentIndex', props.images.length - 1)
}

function next() {
  if (props.currentIndex < props.images.length - 1) emit('update:currentIndex', props.currentIndex + 1)
  else emit('update:currentIndex', 0)
}

// Drag / swipe
const isDragging = ref(false)
const dragStartX = ref(0)
const dragOffset = ref(0)
const THRESHOLD = 60

function onDragStart(e) {
  isDragging.value = true
  dragStartX.value = e.clientX
  dragOffset.value = 0
}

function onDragMove(e) {
  if (!isDragging.value) return
  dragOffset.value = e.clientX - dragStartX.value
}

function onDragEnd() {
  if (!isDragging.value) return
  isDragging.value = false
  if (dragOffset.value < -THRESHOLD) next()
  else if (dragOffset.value > THRESHOLD) prev()
  dragOffset.value = 0
}

function onTouchStart(e) {
  dragStartX.value = e.touches[0].clientX
  dragOffset.value = 0
  isDragging.value = true
}

function onTouchMove(e) {
  if (!isDragging.value) return
  dragOffset.value = e.touches[0].clientX - dragStartX.value
}

function onTouchEnd() {
  isDragging.value = false
  if (dragOffset.value < -THRESHOLD) next()
  else if (dragOffset.value > THRESHOLD) prev()
  dragOffset.value = 0
}

function onKeydown(e) {
  if (props.currentIndex < 0) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 24px 72px;
  animation: fadeIn 0.2s ease;
  outline: none;
  user-select: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-img-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-width: 100%;
  max-height: 90vh;
}

.lightbox-img {
  max-width: 100%;
  max-height: 85vh;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
  animation: scaleIn 0.2s ease;
  cursor: grab;
}

.lightbox-img:active {
  cursor: grabbing;
}

@keyframes scaleIn {
  from { transform: scale(0.93); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 1;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  z-index: 1;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-nav.prev { left: 16px; }
.lightbox-nav.next { right: 16px; }

.lightbox-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.dot.active {
  background: #dcae45;
  transform: scale(1.3);
}

@media (max-width: 600px) {
  .lightbox-overlay {
    padding: 16px 56px;
  }

  .lightbox-nav {
    width: 38px;
    height: 38px;
  }

  .lightbox-nav.prev { left: 8px; }
  .lightbox-nav.next { right: 8px; }
}
</style>

