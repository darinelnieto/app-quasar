<template>
  <div class="profile-screen">
    <div class="profile-header">
      <div class="profile-avatar">👤</div>
      <div class="profile-info">
        <div class="profile-name">Juan David López</div>
        <div class="profile-role">Owner • Full Account</div>
        <div class="profile-bio">Passionate about keeping family history alive and creating new memories with loved ones.</div>
        <div class="btn-group">
          <button class="btn btn-primary">Edit Profile</button>
          <button class="btn btn-secondary">Add Information</button>
        </div>
      </div>
    </div>

    <h3>My Story</h3>
    <TimelineEvent
      icon="📸"
      title="Photos: Cartagena Vacation"
      description="12 photos shared"
      date="March 15, 2026"
    />
    <TimelineEvent
      icon="🎥"
      title="Video: Childhood Memories"
      description="5-minute narrated video"
      date="March 8, 2026"
    />
    <TimelineEvent
      icon="🎙️"
      title="Audio Memo: My Career"
      description="3-minute recorded memo"
      date="March 1, 2026"
    />
  </div>
</template>

<script setup>
import TimelineEvent from '../components/dashboard/TimelineEvent.vue'
</script>

<style scoped>
.profile-screen {
  max-width: 1000px;
  margin: 0 auto;
}

.profile-header {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  background: linear-gradient(135deg, #dcae45, #f0c777);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  flex-shrink: 0;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-family: var(--font-primary);
  font-size: 28px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.profile-role {
  font-size: 14px;
  color: #dcae45;
  margin-bottom: 12px;
}

.profile-bio {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.btn-group {
  display: flex;
  gap: 12px;
  margin-top: 16px;
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

.btn-secondary {
  background-color: transparent;
  color: #dcae45;
  border: 2px solid #dcae45;
}

.btn-secondary:hover {
  background-color: rgba(220, 174, 69, 0.1);
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
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
    font-size: 32px;
  }

  .btn-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
