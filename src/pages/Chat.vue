<template>
  <div class="chat-screen">
    <h2>Mensajes Privados</h2>

    <div class="chat-container">
      <div class="chat-list">
        <div class="chat-item active">
          <div class="chat-name">Roberto López</div>
          <div class="chat-preview">Nos vemos en la reunión familiar...</div>
        </div>
        <div class="chat-item">
          <div class="chat-name">Isabel García</div>
          <div class="chat-preview">¿Confirmas que vienes al almuerzo?</div>
        </div>
        <div class="chat-item">
          <div class="chat-name">Laura López</div>
          <div class="chat-preview">Hermano, necesito tu ayuda con algo...</div>
        </div>
        <div class="chat-item">
          <div class="chat-name">Grupo: Familia López</div>
          <div class="chat-preview">Marco: ¿A qué hora es la cena?</div>
        </div>
      </div>

      <div class="chat-window">
        <div class="messages">
          <div class="message received">
            <div class="message-content">Hola Juan, ¿cómo estás?</div>
          </div>
          <div class="message received">
            <div class="message-content">Nos vemos en la reunión familiar el próximo sábado</div>
          </div>
          <div class="message sent">
            <div class="message-content">¡Perfecto! Llevo algo de comer</div>
          </div>
          <div class="message received">
            <div class="message-content">Excelente, hazlo como siempre. ¡Te quiero!</div>
          </div>
          <div class="message sent">
            <div class="message-content">¡Yo también papá! Nos vemos pronto</div>
          </div>
        </div>
        <div class="message-input">
          <input type="text" placeholder="Escribe tu mensaje..." />
          <button class="btn btn-primary" style="width: auto;">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.chat-screen {
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--color-primary);
}

.chat-container {
  display: flex;
  gap: 0;
  height: 600px;
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  overflow: hidden;
}

.chat-list {
  width: 280px;
  border-right: 1px solid rgba(220, 174, 69, 0.2);
  overflow-y: auto;
  background: #ffffff;
}

.chat-item {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(220, 174, 69, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.chat-item:hover {
  background-color: rgba(220, 174, 69, 0.1);
}

.chat-item.active {
  background-color: rgba(220, 174, 69, 0.15);
}

.chat-name {
  font-weight: 600;
  color: #0c1335;
  font-size: 14px;
  margin-bottom: 4px;
}

.chat-preview {
  font-size: 12px;
  color: #999999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.messages {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
}

.message {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.message.sent {
  justify-content: flex-end;
}

.message-content {
  max-width: 60%;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
}

.message.received .message-content {
  background-color: rgba(220, 174, 69, 0.15);
  color: #0c1335;
}

.message.sent .message-content {
  background-color: #dcae45;
  color: #0c1335;
}

.message-input {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-top: 1px solid rgba(220, 174, 69, 0.2);
}

.message-input input {
  flex: 1;
  background-color: #f5f5f5;
  border: 1px solid rgba(220, 174, 69, 0.2);
  color: #0c1335;
  padding: 12px 16px;
  border-radius: 8px;
  font-family: var(--font-secondary);
  font-size: 14px;
}

.message-input input::placeholder {
  color: #999999;
}

.message-input input:focus {
  outline: none;
  border-color: #dcae45;
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

@media (max-width: 768px) {
  .chat-container {
    flex-direction: column;
    height: auto;
    min-height: 400px;
  }

  .chat-list {
    width: 100%;
    max-height: 150px;
    border-right: none;
    border-bottom: 1px solid rgba(220, 174, 69, 0.2);
    display: flex;
    overflow-x: auto;
  }

  .chat-item {
    border-bottom: none;
    border-right: 1px solid rgba(220, 174, 69, 0.1);
    flex-shrink: 0;
    min-width: 150px;
  }

  .message-content {
    max-width: 80%;
  }
}
</style>
