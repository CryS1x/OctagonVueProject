<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const isActive = (path: string) => {
  return route.path === path;
};
const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="error-container">
    <h1>404</h1>
    <h3>The page is temporarily unavailable</h3>
    <h3>If you see this and the main site is working, please contact:</h3>
    <a href="https://t.me/Cr4Six" class="contact-link">https://t.me/Cr4Six</a>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200..1000&display=swap');

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 98vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  font-family: "Cairo Play", sans-serif;
  font-size: 400px;
  color: grey;
  margin: 0;
  line-height: 1;
}

h3 {
  font-family: "Cairo Play", sans-serif;
  font-size: 40px;
  color: grey;
  margin: 10px 0;
}

.contact-link {
  font-family: "Cairo Play", sans-serif;
  font-size: 30px;
  color: grey;
  text-decoration: none;
  margin-top: 20px;
}

.contact-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  h1 {
    font-size: 200px;
  }

  h3 {
    font-size: 24px;
  }

  .contact-link {
    font-size: 20px;
  }
}
</style>
