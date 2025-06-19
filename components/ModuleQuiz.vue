<template>
  <div v-for="q in currentModule.quiz" :key="q.id">
    <!-- Para tipo iframe -->
    <div v-if="q.type === 'iframe'">
      <iframe :src="q.url" frameborder="0" allowfullscreen style="width:100%; height:600px;"></iframe>
    </div>

   
    </div>

    
</template>

<script setup>
import { computed } from 'vue'
import { useModuleStore } from '@/stores/module'

const moduleStore = useModuleStore()
const currentModule = computed(() => moduleStore.modules[moduleStore.currentModule])
</script>
