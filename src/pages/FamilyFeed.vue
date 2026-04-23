<template>
  <div class="family-feed-screen">
    <h2>Feed Familiar</h2>
    <p class="subtitle">Mantente conectado con las actualizaciones de tu familia</p>

    <FeedPost
      author="Roberto López"
      initials="RM"
      time="Hace 2 horas"
      content="Qué hermoso día con la familia en el parque. ¡Las tradiciones viven en nosotros! 🌳❤️"
      :likes="12"
      :comments="3"
    />
    <FeedPost
      author="Isabel García"
      initials="IG"
      time="Hace 5 horas"
      content="¡Cocinando la receta secreta de abuela María! Quien quiere venir a probar? 👩‍🍳"
      :likes="28"
      :comments="8"
    />
    <FeedPost
      author="Laura López"
      initials="LL"
      time="Ayer"
      content="Mi día en la universidad. Estudiando duro para los exámenes finales. ¡Gracias familia por el apoyo! 📚"
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
