<template>
  <div class="feed-post">
    <div class="post-header">
      <div class="post-avatar">{{ initials }}</div>
      <div class="post-meta">
        <div class="post-name">{{ author }}</div>
        <div class="post-time">{{ time }}</div>
      </div>
    </div>
    <div class="post-content">{{ content }}</div>
    <div class="post-actions">
      <div class="post-action">❤️ {{ likes }}</div>
      <div class="post-action">💬 {{ comments }}</div>
      <div class="post-action">↗️ Share</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  author: {
    type: String,
    required: true
  },
  initials: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.feed-post {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
}

.feed-post:hover {
  border-color: #dcae45;
}

.post-header {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
}

.post-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dcae45, #f0c777);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0c1335;
  font-weight: 600;
  flex-shrink: 0;
}

.post-meta {
  flex: 1;
}

.post-name {
  font-weight: 600;
  color: #0c1335;
  font-size: 14px;
}

.post-time {
  font-size: 12px;
  color: #999999;
}

.post-content {
  margin-bottom: 12px;
  line-height: 1.6;
  color: #333333;
}

.post-actions {
  display: flex;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(220, 174, 69, 0.2);
  font-size: 12px;
  color: #999999;
}

.post-action {
  cursor: pointer;
  transition: color 0.3s ease;
}

.post-action:hover {
  color: #dcae45;
}
</style>
