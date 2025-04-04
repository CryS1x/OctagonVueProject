<template>
  <div class="invitation-card">
    <div class="invitation-title">{{ title }}</div>
    <div class="invitation-info-container">
      <div class="invitation-info">{{ time }}</div>
      <div class="invitation-info">{{ name }}</div>
      <div class="invitation-info">{{ profession }}</div>
    </div>
    <div class="invitation-actions">
      <button class="details-button">Подробнее</button>
      <button class="reject-button">Отклонить</button>
    </div>
  </div>
</template>

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
defineProps({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.invitation-card {
  font-family: "Nunito Sans", sans-serif;
  background: #f2f2f2;
  border-radius: 8px;
  width: 360px;
  height: 127px;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.invitation-title {
  font-size: 14px;
  font-weight: 400;
  color: #333;
  margin-bottom: 12px;
}

.invitation-info-container {
  display: flex;
  gap: 8px;
}

.invitation-info {
  font-size: 12px;
  color: #ffffff;
  background: #86aeaa;
  padding: 8px;
  border-radius: 6px;
  text-align: center;
  font-weight: 700;
  flex: 1;
}

.invitation-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.details-button,
.reject-button {
  font-family: "Nunito Sans", sans-serif;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  width: 120px;
}

.details-button {
  font-weight: 600;
  background-color: #43716b;
  color: #fff;
}

.reject-button {
  background-color: #ffffff;
  color: #000000;
}

.details-button:hover {
  background-color: #2c4945;
}

.reject-button:hover {
  background-color: #d2d2d2;
}
</style>