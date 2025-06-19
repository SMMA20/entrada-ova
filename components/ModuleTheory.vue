<template>
  <div class="content-card">
    <h2 class="card-title">
      <i class="fas fa-book"></i>
      Contenido Teórico
    </h2>
    <div v-html="content"></div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: String,
    required: true
  }
});
</script>