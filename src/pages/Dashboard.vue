<template>
  <div class="dashboard-screen">
    <div class="header">
      <h2>Bienvenido, Juan</h2>
      <p>Aquí está todo lo que necesitas saber sobre tu familia.</p>
    </div>

    <div class="dashboard-grid">
      <DashboardCard
        title="Actualizaciones Recientes"
        description="María compartió 3 fotos nuevas"
        icon="🎯"
      />
      <DashboardCard
        title="Recordatorios"
        description="Cumpleaños de Carlos en 5 días"
        icon="🎂"
      />
      <DashboardCard
        title="Mi Perfil"
        description="Completa tu perfil familiar"
        icon="📝"
      />
      <DashboardCard
        title="Miembros Activos"
        description="8 miembros conectados"
        icon="👥"
      />
    </div>

    <h3>Próximos Eventos</h3>
    <TimelineEvent
      icon="🎂"
      title="Cumpleaños de Carlos"
      description="En 5 días - Carlos cumple 45 años"
      date="28 de abril, 2026"
    />
    <TimelineEvent
      icon="👨‍👩‍👧‍👦"
      title="Reunión Familiar"
      description="Comida familiar en casa de los abuelos"
      date="5 de mayo, 2026"
    />
  </div>
</template>

<script setup>
import DashboardCard from '../components/dashboard/DashboardCard.vue'
import TimelineEvent from '../components/dashboard/TimelineEvent.vue'
</script>

<style scoped>
.dashboard-screen {
  max-width: 1200px;
  margin: 0 auto;
}

.header h2 {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-primary);
}

.header p {
  color: #666666;
  margin-bottom: 24px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

h3 {
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 24px;
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
