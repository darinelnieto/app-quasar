<template>
  <div class="family-tree-screen">
    <div class="tree-top">
      <div>
        <h2>Family Tree</h2>
        <p class="subtitle">View and manage your complete family structure</p>
      </div>
      <button class="btn btn-primary">+ Add Member</button>
    </div>

    <div
      class="tree-canvas-wrapper"
      @mousedown="onPointerDown"
      @mousemove="onPointerMove"
      @mouseup="onPointerUp"
      @mouseleave="onPointerUp"
      @touchstart.passive="onTouchStart"
      @touchmove.prevent="onTouchMove"
      @touchend="onPointerUp"
      @touchcancel="onPointerUp"
      :class="{ dragging: isDragging }"
    >
      <div
        class="tree-canvas"
        :style="{ transform: `translate(${offsetX}px, ${offsetY}px)` }"
      >
        <div class="member-cards">
          <div class="member-card">
            <img src="https://i.pravatar.cc/150?img=70" class="member-avatar-img" alt="Carlos" />
            <div class="member-name">Carlos García</div>
            <div class="member-rel">Grandfather</div>
          </div>
          <div class="member-connector">—</div>
          <div class="member-card">
            <img src="https://i.pravatar.cc/150?img=56" class="member-avatar-img" alt="María" />
            <div class="member-name">María Elena</div>
            <div class="member-rel">Grandmother</div>
          </div>
        </div>

        <div class="tree-lines">
          <div class="line-v"></div>
        </div>

        <div class="member-cards">
          <div class="member-card">
            <img src="https://i.pravatar.cc/150?img=12" class="member-avatar-img" alt="Roberto" />
            <div class="member-name">Roberto López</div>
            <div class="member-rel">Father</div>
          </div>
          <div class="member-connector">—</div>
          <div class="member-card">
            <img src="https://i.pravatar.cc/150?img=25" class="member-avatar-img" alt="Isabel" />
            <div class="member-name">Isabel García</div>
            <div class="member-rel">Mother</div>
          </div>
        </div>

        <div class="tree-lines">
          <div class="line-v"></div>
        </div>

        <div class="member-cards">
          <div class="member-card active">
            <img src="https://i.pravatar.cc/150?img=33" class="member-avatar-img" alt="Juan" />
            <div class="member-name">Juan David</div>
            <div class="member-rel">You</div>
          </div>
          <div class="member-connector"> </div>
          <div class="member-card">
            <img src="https://i.pravatar.cc/150?img=47" class="member-avatar-img" alt="Laura" />
            <div class="member-name">Laura López</div>
            <div class="member-rel">Sister</div>
          </div>
          <div class="member-connector"> </div>
          <div class="member-card">
            <img src="https://i.pravatar.cc/150?img=15" class="member-avatar-img" alt="Marco" />
            <div class="member-name">Marco López</div>
            <div class="member-rel">Brother</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const offsetX = ref(0)
const offsetY = ref(0)
const isDragging = ref(false)

let startX = 0
let startY = 0
let startOffsetX = 0
let startOffsetY = 0

function beginDrag(x, y) {
  isDragging.value = true
  startX = x
  startY = y
  startOffsetX = offsetX.value
  startOffsetY = offsetY.value
}

function moveDrag(x, y) {
  if (!isDragging.value) return
  offsetX.value = startOffsetX + (x - startX)
  offsetY.value = startOffsetY + (y - startY)
}

function onPointerDown(event) {
  beginDrag(event.clientX, event.clientY)
}

function onPointerMove(event) {
  moveDrag(event.clientX, event.clientY)
}

function onTouchStart(event) {
  const touch = event.touches[0]
  beginDrag(touch.clientX, touch.clientY)
}

function onTouchMove(event) {
  const touch = event.touches[0]
  moveDrag(touch.clientX, touch.clientY)
}

function onPointerUp() {
  isDragging.value = false
}
</script>

<style scoped>
.family-tree-screen {
  max-width: 1000px;
  margin: 0 auto;
}

.tree-canvas-wrapper {
  border-radius: 16px;
  overflow: hidden;
  cursor: grab;
  touch-action: none;
}

.tree-canvas-wrapper.dragging {
  cursor: grabbing;
}

.tree-canvas {
  width: max-content;
  min-width: 100%;
  margin: 0 auto;
  transition: transform 0.05s linear;
}

.tree-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
}

h2 {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 6px;
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

.member-cards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.member-card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.25);
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 120px;
  transition: all 0.2s;
  cursor: pointer;
}

.member-card:hover {
  border-color: #dcae45;
  box-shadow: 0 4px 12px rgba(220, 174, 69, 0.2);
}

.member-card.active {
  border-color: #dcae45;
  background: rgba(220, 174, 69, 0.06);
}

.member-avatar-img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(220, 174, 69, 0.25);
}

.member-name {
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  text-align: center;
}

.member-rel {
  font-size: 11px;
  color: #999999;
}

.member-connector {
  color: rgba(220, 174, 69, 0.5);
  font-size: 20px;
  font-weight: 300;
  padding: 0 4px;
}

.tree-lines {
  display: flex;
  justify-content: center;
  padding: 4px 0;
}

.line-v {
  width: 2px;
  height: 28px;
  background: rgba(220, 174, 69, 0.4);
}

@media (max-width: 768px) {
  .tree-top {
    flex-direction: column;
    gap: 12px;
  }

  .member-cards {
    gap: 6px;
  }

  .member-card {
    min-width: 90px;
    padding: 12px;
  }
}
</style>
