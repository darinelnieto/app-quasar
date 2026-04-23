<template>
  <div class="memory-card">
    <div class="memory-name">{{ name }}</div>
    <div class="memory-dates">{{ dates }}</div>
    <div class="memory-description">{{ description }}</div>
    <div class="memory-media" v-if="media.length > 0">
      <div class="memory-media-item" v-for="(item, idx) in media" :key="idx">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  dates: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  media: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.memory-card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  position: relative;
}

.memory-card::before {
  content: '✦';
  position: absolute;
  top: 12px;
  right: 12px;
  color: #dcae45;
  font-size: 20px;
  opacity: 0.5;
}

.memory-name {
  font-family: var(--font-primary);
  font-size: 20px;
  font-weight: 600;
  color: #dcae45;
  margin-bottom: 8px;
}

.memory-dates {
  font-size: 13px;
  color: #999999;
  margin-bottom: 12px;
}

.memory-description {
  font-size: 14px;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 12px;
}

.memory-media {
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: #666666;
  flex-wrap: wrap;
}

.memory-media-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background-color: rgba(220, 174, 69, 0.15);
  border-radius: 4px;
}
</style>
