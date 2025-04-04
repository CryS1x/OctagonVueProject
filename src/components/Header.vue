<script setup lang="ts">
import '../assets/Header.css';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const route = useRoute();
const isActive = (path: string) => {
  return route.path === path;
};
const navigateTo = (path: string) => {
  router.push(path);
};
const navigateToHome = () => {
  router.push('/');
};
const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div class="Comp_header">
    <img class="Comp_icon" src="../assets/images/icon.png" alt="Logo" />
    <div class="sComp_content">
      <div
          class="Comp_content__tab"
          :class="{ active: isActive('/apparatus') }"
          @click="navigateTo('/apparatus')"
      >
        <p>Аппаратура</p>
      </div>
      <div
          class="Comp_content__tab"
          :class="{ active: isActive('/people') }"
          @click="navigateTo('/people')"
      >
        <p>Люди</p>
      </div>
      <div
          class="Comp_content__tab"
          :class="{ active: isActive('/space') }"
          @click="navigateTo('/space')"
      >
        <p>Пространство</p>
      </div>
      <div
          class="Comp_content__tab"
          :class="{ active: isActive('/profile') }"
          @click="toggleModal"
      >
        <p>Профиль</p>
      </div>
      <img
          class="profile-photo"
          src="https://i.imgur.com/LUmaoh9.png"
          alt="Profile Photo"
          @click="toggleModal"
      />
      <div v-if="isModalOpen" class="modal-header">
        <div class="modal-content-header">
          <div class="modal-header-header">
            <span class="modal-name-header">Иван Иванов</span>
            <img
                class="modal-icon-header"
                src="https://i.imgur.com/zN5YIMx.png"
                alt="Settings"
            />
          </div>
          <div class="modal-email">example@yandex.ru</div>
          <button class="modal-button-header" @click="navigateToHome" >Выход</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>