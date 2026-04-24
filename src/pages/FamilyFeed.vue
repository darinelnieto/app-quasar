<template>
  <div class="family-feed-screen">
    <h2>Open Family</h2>
    <p class="subtitle">Stay connected with your family's updates</p>

    <div class="featured-pair">
      <div class="pair-card">
        <div class="pair-avatars">
          <img src="https://i.pravatar.cc/150?img=12" class="pair-avatar-img" alt="Roberto" />
          <img src="https://i.pravatar.cc/150?img=25" class="pair-avatar-img overlap" alt="Isabel" />
        </div>
        <div class="pair-name">Roberto & Isabel</div>
        <div class="pair-role">Parents</div>
        <div class="pair-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>

    <FeedPost
      author="Roberto López"
      initials="RL"
      avatar="https://i.pravatar.cc/150?img=12"
      time="2 hours ago"
      content="Qué tarde tan bonita en el parque con toda la familia. Las tradiciones viven en nosotros."
      image="https://picsum.photos/seed/park42/800/400"
      :likes="12"
      :comments="3"
    />
    <FeedPost
      author="Isabel García"
      initials="IG"
      avatar="https://i.pravatar.cc/150?img=25"
      time="5 hours ago"
      content="Preparando la receta secreta de la abuela María. ¡Quién quiere venir a probarla?"
      image="https://picsum.photos/seed/kitchen88/800/400"
      :likes="28"
      :comments="8"
    />
    <FeedPost
      author="Laura López"
      initials="LL"
      avatar="https://i.pravatar.cc/150?img=47"
      time="Yesterday"
      content="Mi día en la universidad. Estudiando fuerte para los exámenes finales. ¡Gracias familia por el apoyo!"
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

.featured-pair {
  margin-bottom: 28px;
}

.pair-card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.pair-avatars {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.pair-avatar-img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.pair-avatar-img.overlap {
  margin-left: -20px;
}

.pair-name {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
}

.pair-role {
  font-size: 13px;
  color: #999999;
}

.pair-dots {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(220, 174, 69, 0.3);
}

.dot.active {
  background: #dcae45;
}
</style>
