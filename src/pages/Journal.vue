<template>
  <div class="journal-screen">
    <h2>Mi Viaje</h2>
    <p class="subtitle">Documenta tu historia con fotos, videos, notas y memorias de voz</p>

    <button class="btn btn-primary" style="margin-bottom: 24px;">+ Agregar Contenido</button>

    <TimelineEvent
      icon="📸"
      title="Álbum: Vacaciones 2025"
      description="24 fotos de nuestras vacaciones en Cartagena. Momentos inolvidables en familia."
      date="15 de marzo, 2026"
    />
    <TimelineEvent
      icon="🎙️"
      title="Memo de Voz: Historias de la Infancia"
      description="Recordando anécdotas de mis primeros años viviendo en Medellín."
      date="8 de marzo, 2026"
    />
    <TimelineEvent
      icon="📝"
      title="Nota: Lecciones Aprendidas"
      description="Reflexiones sobre la vida, el trabajo y la importancia de la familia."
      date="1 de marzo, 2026"
    />
    <TimelineEvent
      icon="🎥"
      title="Video: Un Día en mi Vida"
      description="Video personal mostrando mi rutina diaria y lo que es importante para mí."
      date="22 de febrero, 2026"
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
