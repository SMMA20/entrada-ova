<template>
  <div class="sidebar" :class="{ 'open': isOpen }">
    <div class="sidebar-header">
      <div class="logo">Fotografia</div>
      <div>Aprendizaje Interactivo</div>
    </div>
  
    <ul class="nav-menu">
      <li class="nav-item" v-for="(module, index) in modules" :key="index">
        <div 
          class="nav-link" 
          :class="{ 'active': currentModule === index }"
          @click="$emit('change-module', index)"
        >
          <span class="nav-icon"><i :class="module.icon"></i></span>
          {{ module.title }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: true
  },
  modules: {
    type: Array,
    required: true
  },
  currentModule: {
    type: Number,
    required: true
  },
});

defineEmits(['change-module']);
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--secondary);
  color: white;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.sidebar-header {
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(139, 6, 6, 0.1);
  text-align: center;
}

.logo {
  color: var(--primary);
  font-size: 24px;
  font-weight: bold;
}


.nav-menu {
  list-style: none;
  padding: 20px 0;
}

.nav-item {
  margin-bottom: 5px;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-link:hover, .nav-link.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  border-left: 4px solid var(--primary);
}

.nav-icon {
  margin-right: 12px;
  width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }
  
  .sidebar.open {
    max-height: 500px;
  }
}
</style>
