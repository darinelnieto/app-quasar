<template>
  <div class="family-feed-screen">
    <h2>Family Feed</h2>
    <p class="subtitle">Stay connected with your family's updates</p>

    <FeedPost
      author="Roberto López"
      initials="RM"
      time="2 hours ago"
      content="What a beautiful day with the family at the park. Traditions live on in us! 🌳❤️"
      :likes="12"
      :comments="3"
    />
    <FeedPost
      author="Isabel García"
      initials="IG"
      time="5 hours ago"
      content="Making grandmother Maria's secret recipe! Who wants to come try it? 👩‍🍳"
      :likes="28"
      :comments="8"
    />
    <FeedPost
      author="Laura López"
      initials="LL"
      time="Yesterday"
      content="My day at university. Studying hard for final exams. Thank you family for the support! 📚"
      :likes="15"
      :comments="5"
    />
  </div>
</template>

<script setup>
import FeedPost from '../components/feed/FeedPost.vue'
</script>

<style scoped>
.family-feed-screen {
  max-width: 800px;
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
