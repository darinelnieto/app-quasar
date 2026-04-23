<template>
  <div class="timeline-item">
    <div class="timeline-icon">{{ icon }}</div>
    <div class="timeline-content">
      <div class="timeline-title">{{ title }}</div>
      <div class="timeline-description">{{ description }}</div>
      <div class="timeline-date">{{ date }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.timeline-item {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: #ffffff;
  border-left: 3px solid #dcae45;
  border-radius: 8px;
}

.timeline-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
}

.timeline-title {
  font-family: var(--font-primary);
  font-weight: 600;
  margin-bottom: 4px;
  color: #dcae45;
}

.timeline-description {
  font-size: 13px;
  color: #666666;
  margin-bottom: 8px;
}

.timeline-date {
  font-size: 12px;
  color: #999999;
  opacity: 0.7;
}
</style>
