<template>
  <div class="home-main-container">
    <header class="home-header">
      <img class="home-header__logo" src="../assets/images/icon.png" alt="logo" />
      <h1 class="home-header__title">СБР</h1>
      <p class="home-header__subtitle">Сервис бронирования ресурсов</p>
    </header>
    <div class="home-actions">
      <button
          class="home-actions__btn home-actions__btn--login"
          @click="navigateToSpace"
      >
        Вход
      </button>
      <button
          class="home-actions__btn home-actions__btn--register"
          @click="navigateToSpace"
      >
        Регистрация
      </button>
    </div>
    <div class="home-description">
      <p class="home-description__text">
        Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../assets/Home.css';
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';

const router = useRouter();

// Функция для перехода на страницу /space
const navigateToSpace = () => {
  router.push('/space');
};

onMounted(() => {
  document.body.classList.add('home-page');
});
onUnmounted(() => {
  document.body.classList.remove('home-page');
});
</script>

<style scoped>
/* Ваши стили для компонента Home */
</style>