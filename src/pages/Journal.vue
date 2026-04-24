<template>
  <div class="journal-screen">
    <div class="journal-top">
      <div>
        <h2>My Journey</h2>
        <p class="subtitle">Document your story with photos, videos, notes, and voice memos</p>
      </div>
      <button class="btn btn-primary">+ Add Content</button>
    </div>

    <div class="journal-entries">
      <div class="entry-card">
        <div class="entry-icon">📸</div>
        <div class="entry-body">
          <div class="entry-title">Album: 2025 Vacation</div>
          <div class="entry-desc">24 photos from our vacation in Cartagena. Unforgettable family moments.</div>
          <div class="entry-date">March 15, 2026</div>
        </div>
        <div class="entry-tag">Photos</div>
      </div>
      <div class="entry-card">
        <div class="entry-icon">🎙️</div>
        <div class="entry-body">
          <div class="entry-title">Voice Memo: Childhood Stories</div>
          <div class="entry-desc">Reminiscing about anecdotes from my early years living in Medellin.</div>
          <div class="entry-date">March 8, 2026</div>
        </div>
        <div class="entry-tag">Audio</div>
      </div>
      <div class="entry-card">
        <div class="entry-icon">📝</div>
        <div class="entry-body">
          <div class="entry-title">Note: Lessons Learned</div>
          <div class="entry-desc">Reflections on life, work, and the importance of family.</div>
          <div class="entry-date">March 1, 2026</div>
        </div>
        <div class="entry-tag">Note</div>
      </div>
    </div>

    <div class="video-section">
      <div class="video-label">Featured Video</div>
      <div class="video-player">
        <img src="https://picsum.photos/seed/journey77/800/400" class="video-bg" alt="video thumbnail" />
        <div class="play-btn">&#9654;</div>
      </div>
      <div class="video-meta">
        <div class="video-title">A Day in My Life</div>
        <div class="video-desc">Personal video showing my daily routine and what matters to me.</div>
      </div>
      <div class="video-actions">
        <button class="btn btn-secondary">↗ Share</button>
        <button class="btn btn-ghost">📥 Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.journal-screen {
  max-width: 1000px;
  margin: 0 auto;
}

.journal-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

h2 {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--color-primary);
}

.subtitle {
  color: #666666;
  font-size: 14px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 13px;
  flex-shrink: 0;
}

.btn-primary {
  background-color: #dcae45;
  color: #0c1335;
}

.btn-primary:hover {
  background-color: #f0c777;
}

.btn-secondary {
  background-color: #dcae45;
  color: #0c1335;
}

.btn-secondary:hover {
  background-color: #f0c777;
}

.btn-ghost {
  background: transparent;
  border: 1px solid rgba(220, 174, 69, 0.4);
  color: #dcae45;
}

.btn-ghost:hover {
  background: rgba(220, 174, 69, 0.1);
}

.journal-entries {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.entry-card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-left: 3px solid #dcae45;
  border-radius: 10px;
  padding: 16px 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: all 0.2s;
  cursor: pointer;
}

.entry-card:hover {
  border-color: #dcae45;
  box-shadow: 0 4px 12px rgba(220, 174, 69, 0.1);
}

.entry-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.entry-body {
  flex: 1;
}

.entry-title {
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 14px;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.entry-desc {
  font-size: 13px;
  color: #666666;
  margin-bottom: 6px;
  line-height: 1.5;
}

.entry-date {
  font-size: 11px;
  color: #999999;
}

.entry-tag {
  font-size: 11px;
  background: rgba(220, 174, 69, 0.15);
  color: #dcae45;
  border-radius: 20px;
  padding: 3px 10px;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

.video-section {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 20px;
}

.video-label {
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 600;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.video-player {
  width: 100%;
  height: 200px;
  background: #1a1a2e;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  position: relative;
  overflow: hidden;
}

.video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.play-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: 2px solid rgba(255,255,255,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
}

.play-btn:hover {
  background: rgba(255,255,255,0.25);
}

.video-title {
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 15px;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.video-desc {
  font-size: 13px;
  color: #666666;
  margin-bottom: 14px;
}

.video-actions {
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  .journal-top {
    flex-direction: column;
    gap: 12px;
  }

  .entry-card {
    padding: 12px 14px;
  }
}
</style>
