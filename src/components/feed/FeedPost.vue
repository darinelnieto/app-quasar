<template>
  <div class="feed-post">
    <div class="post-header">
      <img v-if="avatar" :src="avatar" :alt="author" class="post-avatar-img" />
      <div v-else class="post-avatar">{{ initials }}</div>
      <div class="post-meta">
        <div class="post-name">{{ author }}</div>
        <div class="post-time">{{ time }}</div>
      </div>
    </div>
    <div class="post-content">{{ content }}</div>
    <img v-if="image" :src="image" :alt="author" class="post-image" @click="lightboxIndex = 0" />
    <div class="post-actions">
      <div class="post-action"><Heart :size="14" /> {{ likes }}</div>
      <div class="post-action"><MessageCircle :size="14" /> {{ comments }}</div>
      <div class="post-action"><Share2 :size="14" /> Share</div>
    </div>

    <ImageLightbox :images="image ? [image] : []" v-model:currentIndex="lightboxIndex" @close="lightboxIndex = -1" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Heart, MessageCircle, Share2 } from 'lucide-vue-next'
import ImageLightbox from '../common/ImageLightbox.vue'

const props = defineProps({
  author: { type: String, required: true },
  initials: { type: String, required: true },
  avatar: { type: String, default: '' },
  time: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: '' },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 }
})

const lightboxIndex = ref(-1)
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

.post-avatar-img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.post-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dcae45, #f0c777);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0c1335;
  font-weight: 600;
  flex-shrink: 0;
  font-size: 14px;
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
  font-size: 14px;
}

.post-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 12px;
  object-fit: cover;
  max-height: 280px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.post-image:hover {
  opacity: 0.92;
}

.post-actions {
  display: flex;
  gap: 20px;
  padding-top: 12px;
  border-top: 1px solid rgba(220, 174, 69, 0.15);
  font-size: 13px;
  color: #999999;
}

.post-action {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: color 0.2s;
}

.post-action:hover {
  color: #dcae45;
}
</style>
