<template>
  <div class="person-card">
    <div class="person-photo">
      <img :src="photoUrl" alt="Фото" class="photo" />
      <div class="photo-label">{{ photoLabel }}</div>
    </div>
    <div class="person-info">
      <div class="name">{{ name }}</div>
      <div class="description">{{ description }}</div>
      <div class="actions">
        <button class="invite-button" @click="showErrorModal">Пригласить</button>
        <button class="details-button">Подробнее</button>
      </div>
    </div>
  </div>
  <!-- Модальное окно с ошибкой -->
  <div v-if="isVisible" class="modal-overlay-error">
    <div class="modal-error">
      <div class="modal-header-error">
        <h2 class="modal-title-error">Ошибка</h2>
      </div>
      <div class="modal-content-error">
        <p class="modal-text-error">Неверный запрос. Обратитесь в техподдержку.</p>
      </div>
      <div class="modal-actions-error">
        <button class="modal-button-error" @click="closeModal">Принять</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue";

const isVisible = ref(false); // Начальное состояние: модалка скрыта

const showErrorModal = () => {
  isVisible.value = true; // Открываем модальное окно
};

const closeModal = () => {
  isVisible.value = false; // Закрываем модальное окно
};

const router = useRouter();
const route = useRoute();
const isActive = (path: string) => {
  return route.path === path;
};
const navigateTo = (path: string) => {
  router.push(path);
};
defineProps({
  photoUrl: {
    type: String,
    required: true,
  },
  photoLabel: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.person-card {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  display: flex;
  background: #F2F2F2;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
  height: 150px;
}

.person-photo {
  position: relative;
  width: 150px;
  height: 100%;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  padding: 5px;
  font-size: 12px;
}

.person-info {
  flex: 1;
  padding: 10px;
}

.name {
  font-size: 20px;
  margin-bottom: 15px;
}

.description {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.actions {
  display: flex;
  margin-top: 10px;
  gap: 10px;
}

.invite-button,
.details-button {
  font-family: "Nunito Sans", sans-serif;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.invite-button {
  background-color: #43716B;
  color: #fff;
  font-weight: 600;
}

.details-button {
  background-color: #FFFFFF;
  color: #000000;
}

.invite-button:hover {
  background-color: #2c4944;
}

.details-button:hover {
  background-color: #e2e6ea;
}

</style>