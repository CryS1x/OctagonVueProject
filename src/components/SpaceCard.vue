<template>
  <div class="space-card">
    <div class="space-photo">
      <img :src="photoUrl" alt="Фото пространства" class="photo" />
      <div class="photo-label photo-label-left">Фото</div>
      <div class="photo-label photo-label-right">Информация</div>
      <div class="photo-label-bottom">{{ TitleCard }}</div>
    </div>
    <div class="booking-and-actions">
      <div class="booking-time">
        <div
            v-for="(time, index) in bookingTimes"
            :key="index"
            class="time-panel"
            :class="{ 'dark-time': isDarkTime(time) }"
        >
          {{ time }}
        </div>
      </div>
      <div class="space-actions">
        <button class="book-button" @click="openBookingModal">Забронировать</button>
        <button class="details-button">Подробнее</button>
      </div>
    </div>
  </div>
  <BookingModal ref="bookingModalRef" />
</template>

<script setup lang="ts">
import BookingModal from '@/components/BookingModal.vue';
import { ref } from 'vue';

const bookingModalRef = ref();

// Функция для открытия модального окна
const openBookingModal = () => {
  bookingModalRef.value.openModal();
};

defineProps({
  photoUrl: {
    type: String,
    required: true,
  },
  bookingTimes: {
    type: Array as () => string[],
    required: true,
  },
  TitleCard: {
    type: String,
    required: true,
  },
});

const isDarkTime = (time: string) => {
  const darkTimes = ["10.00 - 11.00", "11.00 - 12.00", "13.00 - 14.00"];
  return darkTimes.includes(time);
};
</script>

<style scoped>
.space-card {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 1400px;
  margin-bottom: 20px;
}

.space-photo {
  position: relative;
  width: 100%;
  height: 260px;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-label {
  font-family: "Nunito Sans", sans-serif;
  position: absolute;
  top: 10px;
  background: rgb(255, 255, 255);
  padding: 6px 19px;
  border-radius: 4px;
  color: #000000;
  font-size: 12px;
}

.photo-label-left {
  left: 10px;
}

.photo-label-right {
  left: 100px;
}

.photo-label-bottom {
  width: auto;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgb(255, 255, 255);
  padding: 6px 12px;
  border-radius: 4px;
  color: #000000;
  font-size: 17px;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
}

.booking-and-actions {
  display: flex;
  align-items: stretch;
  gap: 20px;
  padding: 12px;
}

.booking-time {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  flex: 1;
}

.time-panel {
  background: #dce7e6;
  color: #000000;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time-panel.dark-time {
  background: #86AEAA;
  color: #fff;
}

.space-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  justify-content: center;
}

.book-button,
.details-button {
  font-family: "Nunito Sans", sans-serif;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.book-button {
  background-color: #43716b;
  color: #fff;
}

.details-button {
  background-color: #f2f2f2;
  color: #333;
}

.book-button:hover {
  background-color: #2c4945;
}

.details-button:hover {
  background-color: #e2e6ea;
}
</style>