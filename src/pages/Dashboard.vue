<template>
  <div class="dashboard-screen">
    <div class="header">
      <h2>Welcome, Juan</h2>
      <p>Here's everything you need to know about your family.</p>
    </div>

    <div class="dashboard-grid">
      <DashboardCard
        title="Recent Updates"
        description="Maria shared 3 new photos"
        icon="🎯"
      />
      <DashboardCard
        title="Reminders"
        description="Carlos' birthday in 5 days"
        icon="🎂"
      />
      <DashboardCard
        title="My Profile"
        description="Complete your family profile"
        icon="📝"
      />
      <DashboardCard
        title="Active Members"
        description="8 members online"
        icon="👥"
      />
    </div>

    <h3>Upcoming Events</h3>
    <TimelineEvent
      icon="🎂"
      title="Carlos' Birthday"
      description="In 5 days - Carlos turns 45"
      date="April 28, 2026"
    />
    <TimelineEvent
      icon="👨‍👩‍👧‍👦"
      title="Family Gathering"
      description="Family lunch at grandparents' house"
      date="May 5, 2026"
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
