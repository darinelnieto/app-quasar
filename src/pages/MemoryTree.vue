<template>
  <div class="memory-tree-screen">
    <h2>Memory Tree</h2>
    <p class="subtitle">Honor and remember your loved ones who have passed</p>

    <MemoryCard
      name="Grandmother Maria Elena López"
      dates="1945 - 2023"
      description="Family matriarch, lover of cooking, plants, and stories. Her legacy lives on in every family gathering."
      :media="['📸 45 Photos', '🎙️ 12 Audio', '📝 8 Notes']"
    />
    <MemoryCard
      name="Grandfather Carlos García"
      dates="1940 - 2020"
      description="Man of principles, tireless worker. His teachings about life guide our steps."
      :media="['📸 38 Photos', '🎥 5 Videos', '📝 10 Notes']"
    />
    <MemoryCard
      name="Aunt Rosa Maria López"
      dates="1955 - 2022"
      description="The joking and caring aunt who always brought joy to family gatherings."
      :media="['📸 22 Photos', '🎙️ 6 Audio']"
    />
  </div>
</template>

<script setup>
import MemoryCard from '../components/memory/MemoryCard.vue'
</script>

<style scoped>
.memory-tree-screen {
  max-width: 900px;
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
</style>
