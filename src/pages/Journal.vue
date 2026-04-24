<template>
  <div class="journal-screen">
    <h2>My Journey</h2>
    <p class="subtitle">Document your story with photos, videos, notes, and voice memos</p>

    <button class="btn btn-primary" style="margin-bottom: 24px;">+ Add Content</button>

    <TimelineEvent
      icon="📸"
      title="Album: 2025 Vacation"
      description="24 photos from our vacation in Cartagena. Unforgettable family moments."
      date="March 15, 2026"
    />
    <TimelineEvent
      icon="🎙️"
      title="Voice Memo: Childhood Stories"
      description="Reminiscing about anecdotes from my early years living in Medellin."
      date="March 8, 2026"
    />
    <TimelineEvent
      icon="📝"
      title="Note: Lessons Learned"
      description="Reflections on life, work, and the importance of family."
      date="March 1, 2026"
    />
    <TimelineEvent
      icon="🎥"
      title="Video: A Day in My Life"
      description="Personal video showing my daily routine and what matters to me."
      date="February 22, 2026"
    />
  </div>
</template>

<script setup>
import TimelineEvent from '../components/dashboard/TimelineEvent.vue'
</script>

<style scoped>
.journal-screen {
  max-width: 1000px;
  margin: 0 auto;
}

h2 {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-primary);
}

.subtitle {
  color: #666666;
  margin-bottom: 24px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.btn-primary {
  background-color: #dcae45;
  color: #0c1335;
}

.btn-primary:hover {
  background-color: #f0c777;
  transform: translateY(-2px);
}
</style>
