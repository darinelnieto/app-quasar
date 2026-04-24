<template>
  <div class="dashboard-screen">
    <div class="dashboard-top">
      <div class="dashboard-main">
        <div class="header">
          <h2>Welcome, Juan</h2>
          <p>Here's everything you need to know about your family.</p>
        </div>

        <div class="dashboard-grid">
          <DashboardCard title="Recent Updates" description="María compartió 3 nuevas fotos del parque" icon="camera" />
          <DashboardCard title="Reminders" description="Cumpleaños de Carlos en 5 días" icon="bell" />
          <DashboardCard title="My Profile" description="Completa tu perfil familiar al 72%" icon="user" />
          <DashboardCard title="Active Members" description="8 miembros conectados ahora" icon="users" />
        </div>

        <h3>Upcoming Events</h3>
        <TimelineEvent icon="🎂" title="Carlos' Birthday" description="In 5 days - Carlos turns 45" date="April 28, 2026" />
        <TimelineEvent icon="👨‍👩‍👧‍👦" title="Family Gathering" description="Family lunch at grandparents' house" date="May 5, 2026" />
      </div>

      <div class="dashboard-side">
        <div class="progress-card">
          <div class="progress-label">Profile Completion</div>
          <div class="progress-ring-wrap">
            <svg viewBox="0 0 120 120" class="ring-svg">
              <circle class="ring-bg" cx="60" cy="60" r="50" />
              <circle class="ring-fill" cx="60" cy="60" r="50" :style="{ strokeDashoffset: ringOffset }" />
            </svg>
            <div class="ring-text">72%</div>
          </div>
          <div class="progress-stats">
            <div class="stat-row"><span>Photos</span><span class="stat-val">45</span></div>
            <div class="stat-row"><span>Videos</span><span class="stat-val">12</span></div>
            <div class="stat-row"><span>Memories</span><span class="stat-val">8</span></div>
          </div>
        </div>

        <div class="settings-card">
          <div class="settings-title">Notifications</div>
          <div class="toggle-row">
            <span>New memories</span>
            <label class="toggle"><input type="checkbox" checked /><span class="slider"></span></label>
          </div>
          <div class="toggle-row">
            <span>Family updates</span>
            <label class="toggle"><input type="checkbox" checked /><span class="slider"></span></label>
          </div>
          <div class="toggle-row">
            <span>Reminders</span>
            <label class="toggle"><input type="checkbox" /><span class="slider"></span></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import DashboardCard from '../components/dashboard/DashboardCard.vue'
import TimelineEvent from '../components/dashboard/TimelineEvent.vue'

const completion = 72
const circumference = 2 * Math.PI * 50
const ringOffset = computed(() => circumference - (completion / 100) * circumference)
</script>

<style scoped>
.dashboard-screen {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-top {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.dashboard-main {
  flex: 1;
  min-width: 0;
}

.dashboard-side {
  width: 240px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
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

/* Progress ring card */
.progress-card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.progress-label {
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 16px;
}

.progress-ring-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
}

.ring-svg {
  width: 120px;
  height: 120px;
  transform: rotate(-90deg);
}

.ring-bg {
  fill: none;
  stroke: rgba(220, 174, 69, 0.15);
  stroke-width: 12;
}

.ring-fill {
  fill: none;
  stroke: #dcae45;
  stroke-width: 12;
  stroke-linecap: round;
  stroke-dasharray: v-bind(circumference);
  transition: stroke-dashoffset 0.6s ease;
}

.ring-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
}

.progress-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #666666;
}

.stat-val {
  font-weight: 600;
  color: var(--color-primary);
}

/* Settings card */
.settings-card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.settings-title {
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 16px;
}

.toggle-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #666666;
  margin-bottom: 12px;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #e0e0e0;
  border-radius: 22px;
  transition: 0.3s;
}

.slider::before {
  content: '';
  position: absolute;
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

.toggle input:checked + .slider {
  background-color: #4caf50;
}

.toggle input:checked + .slider::before {
  transform: translateX(18px);
}

@media (max-width: 900px) {
  .dashboard-top {
    flex-direction: column;
  }

  .dashboard-side {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .progress-card,
  .settings-card {
    flex: 1;
    min-width: 200px;
  }
}
</style>
