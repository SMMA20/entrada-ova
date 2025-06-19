<template>
  <div class="ova-container">
    <AppSidebar 
      :is-open="isSidebarOpen"
      :modules="modules"
      :current-module="currentModule"
      @change-module="changeModule"
    />
    
    <div class="main-content">
      <div class="topbar">
        <button class="menu-toggle" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
      
      </div>
      
      <div class="content-area">
        <div v-if="currentModule !== null">
          <h1 class="module-title">{{ modules[currentModule].title }}</h1>
          <p class="module-description">{{ modules[currentModule].description }}</p>
          
          <ModuleTheory :content="modules[currentModule].theory" />
          
          
          <ModuleExamples :examples="modules[currentModule].examples" />
          
          
          <ModuleQuiz 
            v-if="modules[currentModule].quiz"
            :quiz="modules[currentModule].quiz"
            :module-index="currentModule"
            :user-answers="userAnswers"
            @complete-module="completeModule"
          />
          
          
          <div class="module-navigation">
            <button 
              class="btn btn-secondary" 
              @click="previousModule"
              :disabled="currentModule === 0"
            >
              <i class="fas fa-arrow-left"></i> Módulo Anterior
            </button>
            
            <button 
              class="btn btn-primary" 
              @click="nextModule"
              :disabled="currentModule === modules.length - 1"
            >
              Siguiente Módulo <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref, computed } from 'vue';
import { useModuleStore } from '~/stores/module';


const isSidebarOpen = ref(true);
const moduleStore = useModuleStore();


const modules = computed(() => moduleStore.modules);
const currentModule = computed(() => moduleStore.currentModule);
const userAnswers = computed(() => moduleStore.userAnswers);
const completedModules = computed(() => moduleStore.completedModules);
const progressPercentage = computed(() => 
  Math.round((completedModules.value.length / modules.value.length) * 100)
);


function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function changeModule(index) {
  moduleStore.setCurrentModule(index);
}

function previousModule() {
  if (currentModule.value > 0) {
    changeModule(currentModule.value - 1);
  }
}

function nextModule() {
  if (currentModule.value < modules.value.length - 1) {
    changeModule(currentModule.value + 1);
  }
}

function resetProgress() {
  moduleStore.resetProgress();
}

function completeModule(moduleIndex) {
  moduleStore.completeModule(moduleIndex);
}
</script>

<style scoped>
.ova-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  overflow-y: auto;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--secondary);
}

.content-area {
  padding: 30px;
}

.module-title {
  font-size: 28px;
  margin-bottom: 10px;
  color: var(--secondary);
}

.module-description {
  margin-bottom: 20px;
  color: #666;
}

.module-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

@media (max-width: 768px) {
  .ova-container {
    flex-direction: column;
  }
}
</style>