<template>
  <div class="memory-tree-screen">
    <h2>Árbol de Memoria</h2>
    <p class="subtitle">Honra y recuerda a tus seres queridos que han partido</p>

    <MemoryCard
      name="Abuela María Elena López"
      dates="1945 - 2023"
      description="Matriarca de la familia, amante de la cocina, las plantas y las historias. Su legado vive en cada reunión familiar."
      :media="['📸 45 Fotos', '🎙️ 12 Audio', '📝 8 Notas']"
    />
    <MemoryCard
      name="Abuelo Carlos García"
      dates="1940 - 2020"
      description="Hombre de principios, trabajador incansable. Sus enseñanzas sobre la vida guían nuestros pasos."
      :media="['📸 38 Fotos', '🎥 5 Videos', '📝 10 Notas']"
    />
    <MemoryCard
      name="Tía Rosa María López"
      dates="1955 - 2022"
      description="La tía bromista y cariñosa que siempre traía alegría a los encuentros familiares."
      :media="['📸 22 Fotos', '🎙️ 6 Audio']"
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
