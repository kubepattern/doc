<script setup>
import { ref } from 'vue'

const activeCase = ref('orphan')

const selectCase = (caseId) => {
  activeCase.value = caseId
}
</script>

<template>
  <div class="usecase-container">
    
    <div class="usecase-nav">
      <button 
        :class="['usecase-btn', { active: activeCase === 'orphan' }]" 
        @click="selectCase('orphan')">
        🔍 Orphans
      </button>
      <button 
        :class="['usecase-btn', { active: activeCase === 'absence' }]" 
        @click="selectCase('absence')">
        🛡️ Absence
      </button>
      <button 
        :class="['usecase-btn', { active: activeCase === 'zombies' }]" 
        @click="selectCase('zombies')">
        🧟 Cleanup
      </button>
      <button 
        :class="['usecase-btn', { active: activeCase === 'misconfig' }]" 
        @click="selectCase('misconfig')">
        ⚙️ Audit
      </button>
    </div>

    <div class="usecase-content">
      
      <div v-show="activeCase === 'orphan'" class="case-detail">
        <h2>Detect Orphan Resources</h2>
        <p>Cluesters tent to accumulate "garbage" over time. KubePattern helps you identify resources that exist but are no longer referenced or used by any active workload.</p>
        <ul>
          <li><strong>ConfigMap e Secret</strong> not mouted by any Pod.</li>
          <li><strong>Krateo Widgets</strong> not used</li>
          <li>...</li>
        </ul>
        <div class="custom-block tip">
          <p class="custom-block-title">💡 Advantages</p>
          <p>Reduce cloud costs and keep your etcd database clean.</p>
        </div>
      </div>

      <div v-show="activeCase === 'absence'" class="case-detail">
        <h2>Detect Absence</h2>
        <p>Sometimes the issue is not what exists, but <strong>what's missing</strong>. Ensure security and governance best practices are always applied by checking for the presence of mandatory resources.</p>
        <ul>
          <li>Verify that each Namespace has a default <code>NetworkPolicy</code> (e.g., deny-all).</li>
          <li>Ensure <code>LimitRange</code> and <code>ResourceQuotas</code> exist.</li>
          <li>Check that workloads have the necessary <code>PodDisruptionBudget</code>.</li>
        </ul>
      </div>

      <div v-show="activeCase === 'zombies'" class="case-detail">
        <h2>Delete Zombies</h2>
        <p>KubePattern can not only detect zombies, orphans or misconfigurations, but also actively clean them up.</p>
        <div class="custom-block warning">
          <p class="custom-block-title">⚠️ Warning</p>
          <p>Be careful when deleting resources. Always test the impact of deletion before removing resources.</p>
        </div>
      </div>

      <div v-show="activeCase === 'misconfig'" class="case-detail">
        <h2>Detect Misconfigurations</h2>
        <p>Prevent security incidents and instability by scanning Kubernetes manifests for misconfigurations.</p>
        <ul>
            <li>Container configured to run as <code>root</code> or with <code>privileged: true</code>.</li>
            <li>Lack of <code>requests</code> and <code>limits</code> for CPU and Memory.</li>
            <li>Image tags set to <code>:latest</code> instead of specific versions.</li>
        </ul>
        <div class="custom-block tip">
          <p class="custom-block-title">💡 Info</p>
          <p>KubePattern is not intended to be a replacement for tools such as Kyverno or OPA. But is a convenient way to spot also misconfigurations.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Usando "scoped" lo stile si applica solo qui, senza rompere il resto del sito */
.usecase-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
}

@media (min-width: 768px) {
  .usecase-container {
    flex-direction: row;
  }
}

.usecase-nav {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  background-color: var(--vp-c-bg-mute);
  min-width: 250px;
}

.usecase-btn {
  text-align: left;
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid transparent;
  background: transparent;
  color: var(--vp-c-text-1);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.usecase-btn:hover {
  background-color: var(--vp-c-bg-soft);
}

.usecase-btn.active {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.usecase-content {
  padding: 20px 30px;
  flex-grow: 1;
}

.case-detail h2 {
  margin-top: 0;
  border-bottom: none;
  color: var(--vp-c-brand-1);
  font-size: 1.5rem;
  font-weight: 600;
}

.case-detail ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style: disc;
}

.case-detail li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
</style>