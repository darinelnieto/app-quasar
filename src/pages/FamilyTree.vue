<template>
  <div class="family-tree-screen">
    <h2>Family Tree</h2>
    <p class="subtitle">View and manage your complete family structure</p>

    <div class="tree-container">
      <div style="text-align: center; margin-bottom: 24px;">
        <div class="tree-node">👴 Grandfather Carlos</div>
        <div class="tree-node">👵 Grandmother Maria</div>
      </div>
      <div style="text-align: center; margin-bottom: 24px;">
        <div class="tree-node">👨 Dad Roberto</div>
        <div class="tree-node">👩 Mom Isabel</div>
      </div>
      <div style="text-align: center;">
        <div class="tree-node tree-node-active">👤 Juan David (You)</div>
        <div class="tree-node">👩 Sister Laura</div>
        <div class="tree-node">👦 Brother Marco</div>
      </div>
    </div>

    <h3>Recent Members</h3>
    <div class="card">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div>
          <div style="font-weight: 600; color: #dcae45; margin-bottom: 4px;">Roberto López</div>
          <div style="font-size: 13px; color: #666666;">Father • Full Profile</div>
        </div>
        <div>
          <div style="font-weight: 600; color: #dcae45; margin-bottom: 4px;">Isabel García</div>
          <div style="font-size: 13px; color: #666666;">Mother • Full Profile</div>
        </div>
        <div>
          <div style="font-weight: 600; color: #dcae45; margin-bottom: 4px;">Laura López</div>
          <div style="font-size: 13px; color: #666666;">Sister • Limited Profile</div>
        </div>
      </div>
    </div>

    <button class="btn btn-primary" style="margin-top: 16px;">Add Family Member</button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.family-tree-screen {
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
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 24px;
  color: var(--color-primary);
}

.tree-container {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 24px;
}

.tree-node {
  display: inline-block;
  background: linear-gradient(135deg, #dcae45, #f0c777);
  color: #0c1335;
  padding: 16px 20px;
  border-radius: 8px;
  margin: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tree-node:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(220, 174, 69, 0.3);
}

.tree-node-active {
  background: linear-gradient(135deg, #dcae45, #f0c777);
  border: 3px solid rgba(220, 174, 69, 0.5);
}

.card {
  background: #ffffff;
  border: 1px solid rgba(220, 174, 69, 0.2);
  border-radius: 12px;
  padding: 24px;
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
  .tree-container {
    padding: 16px;
  }

  .tree-node {
    font-size: 12px;
    padding: 12px 16px;
  }

  .card {
    padding: 16px;
  }
}
</style>
