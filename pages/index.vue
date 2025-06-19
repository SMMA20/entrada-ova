<template>
  <div class="container">
    <div class="background" :style="backgroundStyle"></div>
    <div class="content">
      <h1 class="title">EXPLORA LA MAGIA DE LA FOTOGRAFIA</h1>
      <router-link to="/inicio" class="start-button">COMENZAR</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ova',
  
  computed: {
    backgroundStyle() {
      return {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://th.bing.com/th/id/R.6dec36c6569d4c0628837eebd2d1d3ed?rik=bgPXa5PvYJ4nPg&pid=ImgRaw&r=0') center/cover no-repeat`
      };
    }
  },
  
  methods: {
    navigateToHome() {
      this.$router.push('/inicio');
    },
  }
}       
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;
}

.container {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #000;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  animation: zoom 20s infinite alternate;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
.content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
}
.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  transform: translateY(-50px);
  opacity: 0;
  animation: fadeInDown 1.5s forwards;
}

@keyframes fadeInDown {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.start-button {
  padding: 15px 40px;
  background-color: #3a0836;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  transform: scale(0);
  animation: scaleIn 1s 0.5s forwards;
}

@keyframes scaleIn {
  to {
    transform: scale(1);
  }
}

.start-button:hover {
  background-color: #1c263b;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
}
</style>