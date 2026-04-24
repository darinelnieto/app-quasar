<template>
  <div class="profile-screen">
    <div class="profile-header">
      <img src="https://i.pravatar.cc/150?img=33" alt="Juan David" class="profile-avatar" />
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

    <div class="profile-sections">
      <div class="section-block">
        <div class="section-header">
          <h3>My Journey</h3>
          <span class="section-tag">My Journey</span>
        </div>
        <div class="video-thumb">
          <div class="play-btn">▶</div>
        </div>
        <TimelineEvent icon="📸" title="Album: Cartagena Vacation" description="12 photos shared" date="March 15, 2026" />
        <TimelineEvent icon="🎥" title="Video: Childhood Memories" description="5-minute narrated video" date="March 8, 2026" />
        <TimelineEvent icon="🎙️" title="Audio Memo: My Career" description="3-minute recorded memo" date="March 1, 2026" />
      </div>

      <div class="section-block">
        <div class="section-header">
          <h3>My Saving Box</h3>
          <span class="section-tag">My Saving Box</span>
        </div>
        <div class="saving-grid">
          <div class="saving-item">🖼️<span>Photos</span></div>
          <div class="saving-item">🎥<span>Videos</span></div>
          <div class="saving-item">🎙️<span>Audio</span></div>
          <div class="saving-item">📄<span>Docs</span></div>
        </div>
      </div>
    </div>
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
  align-items: flex-start;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid rgba(220, 174, 69, 0.3);
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-family: var(--font-primary);
  font-size: 26px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 6px;
}

.profile-role {
  font-size: 13px;
  color: #dcae45;
  margin-bottom: 10px;
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
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 13px;
}

.btn-primary {
  background-color: #dcae45;
  color: #0c1335;
}

.btn-primary:hover {
  background-color: #f0c777;
}

.btn-secondary {
  background-color: transparent;
  color: #dcae45;
  border: 2px solid #dcae45;
}

.btn-secondary:hover {
  background-color: rgba(220, 174, 69, 0.1);
}

.profile-sections {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.section-block {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

h3 {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
}

.section-tag {
  font-size: 11px;
  background: rgba(220, 174, 69, 0.15);
  color: #dcae45;
  border-radius: 20px;
  padding: 3px 10px;
  font-weight: 600;
}

.video-thumb {
  width: 100%;
  height: 160px;
  background: #f0f2f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.play-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  cursor: pointer;
}

.saving-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.saving-item {
  aspect-ratio: 1;
  background: #f0f2f5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 28px;
  cursor: pointer;
  transition: all 0.2s;
}

.saving-item span {
  font-size: 11px;
  color: #666666;
  font-family: var(--font-secondary);
}

.saving-item:hover {
  background: rgba(220, 174, 69, 0.1);
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .btn-group {
    flex-direction: column;
    width: 100%;
  }

  .saving-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
