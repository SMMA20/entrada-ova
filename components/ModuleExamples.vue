<template>
  <div class="content-card">
    <h2 class="card-title">
      <i class="fas fa-play-circle"></i>
      Ejemplos Multimedia
    </h2>
    
    <div>
      <div class="tabs">
        <div 
          v-for="(example, index) in examples"
          :key="index"
          class="tab"
          :class="{ 'active': currentTab === index }"
          @click="currentTab = index"
        >
          <i class="fas" :class="example.type === 'video' ? 'fa-video' : 'fa-image'"></i>
          {{ example.title }}
        </div>
      </div>
      
      <div class="example-content">
        <div class="media-container">
          <div v-if="examples[currentTab].type === 'video'" class="video-wrapper">
            <iframe
              :src="examples[currentTab].url"
              frameborder="0"
              allowfullscreen
              class="video-iframe"
            ></iframe>
          </div>
          <div v-else-if="examples[currentTab].type === 'image'" class="image-wrapper">
            <img 
              :src="examples[currentTab].url" 
              :alt="examples[currentTab].title"
              class="example-image"
              @error="handleImageError"
            />
          </div>
        </div>
        
        <div class="media-description">
          <h3 class="media-title">{{ examples[currentTab].title }}</h3>
          <p class="media-text">{{ examples[currentTab].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  examples: {
    type: Array,
    required: true
  }
});

const currentTab = ref(0);

const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/600x400/cccccc/666666?text=Imagen+no+disponible';
};
</script>

<style scoped>
.tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab {
  padding: 12px 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  white-space: nowrap;
}

.tab i {
  font-size: 16px;
}

.tab:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.tab.active {
  border-bottom-color: var(--primary);
  color: var(--primary);
}

.example-content {
  padding: 20px 0;
}

.media-container {
  margin-bottom: 20px;
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.example-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.example-image:hover {
  transform: scale(1.02);
}

.media-description {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--primary);
}

.media-title {
  margin: 0 0 10px 0;
  color: var(--primary);
  font-size: 18px;
  font-weight: 600;
}

.media-text {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 14px;
}


@media (max-width: 768px) {
  .tabs {
    flex-direction: column;
  }
  
  .tab {
    border-bottom: 1px solid #eee;
    border-right: none;
    justify-content: flex-start;
  }
  
  .tab.active {
    border-bottom-color: transparent;
    border-left: 4px solid var(--primary);
    background-color: rgba(var(--primary-rgb), 0.1);
  }
  
  .media-description {
    padding: 15px;
  }
  
  .media-title {
    font-size: 16px;
  }
}

.video-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
              linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  z-index: -1;
}
</style>