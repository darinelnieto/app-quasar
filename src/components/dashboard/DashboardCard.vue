<template>
  <div class="dashboard-card">
    <div class="card-header">
      <div>
        <div class="card-title">{{ title }}</div>
        <div class="card-description">{{ description }}</div>
      </div>
      <div class="card-icon">{{ icon }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.dashboard-card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.dashboard-card:hover {
  border-color: #dcae45;
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(220, 174, 69, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-icon {
  font-size: 32px;
}

.card-title {
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: 600;
  color: #dcae45;
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
}
</style>
