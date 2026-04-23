<template>
  <div class="vault-screen">
    <h2>Bóveda - Mi Almacenamiento Privado</h2>
    <p class="subtitle">Tus memorias seguras y privadas. Decide qué compartir con tu familia.</p>

    <button class="btn btn-primary" style="margin-bottom: 24px;">+ Subir Contenido</button>

    <h3>Contenido</h3>
    <div class="vault-grid">
      <div class="vault-item">
        <div class="vault-icon">🖼️</div>
        <div class="vault-label">120 Fotos</div>
      </div>
      <div class="vault-item">
        <div class="vault-icon">🎥</div>
        <div class="vault-label">24 Videos</div>
      </div>
      <div class="vault-item">
        <div class="vault-icon">🎙️</div>
        <div class="vault-label">35 Audio</div>
      </div>
      <div class="vault-item">
        <div class="vault-icon">📄</div>
        <div class="vault-label">18 Documentos</div>
      </div>
    </div>

    <h3 style="margin-top: 24px;">Almacenamiento</h3>
    <div class="card">
      <div style="margin-bottom: 12px;">
        <div style="font-weight: 600; color: #dcae45; margin-bottom: 4px;">Almacenamiento Usado</div>
        <div style="width: 100%; height: 8px; background-color: rgba(220, 174, 69, 0.1); border-radius: 4px; overflow: hidden;">
          <div style="width: 65%; height: 100%; background: linear-gradient(90deg, #dcae45, #f0c777);"></div>
        </div>
        <div style="font-size: 12px; color: #666666; margin-top: 4px;">650 MB de 1 GB disponible</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.vault-screen {
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

h3 {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-primary);
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

.vault-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.vault-item {
  aspect-ratio: 1;
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.vault-item:hover {
  border-color: #dcae45;
  transform: translateY(-4px);
  background: #ffffff;
}

.vault-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.vault-label {
  font-size: 12px;
  color: #666666;
  text-align: center;
}

.card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 24px;
}
</style>
