<template>
  <div v-if="isVisible" class="modal-overlay-new-book">
    <div class="modal-new-book">
      <!-- Заголовок -->
      <div class="modal-header-new-book">
        <h2 class="modal-title-new-book">Новое мероприятие</h2>
      </div>

      <!-- Контент модального окна -->
      <div class="modal-content-new-book">
        <!-- Название мероприятия -->
        <div class="form-group">
          <label class="form-label">Название</label>
          <div class="input-wrapper">
            <input
                type="text"
                class="form-input"
                placeholder="Введите название мероприятия"
            />
            <div class="underline"></div>
          </div>
        </div>

        <!-- Выбор времени -->
        <div class="form-group">
          <label class="form-label">Выберите время мероприятия</label>
          <div class="time-slots">
            <div
                v-for="(time, index) in timeSlots"
                :key="index"
                class="time-slot"
                :class="{ active: selectedTimes.includes(time) }"
                @click="toggleTime(time)"
            >
              {{ time }}
            </div>
          </div>
        </div>

        <!-- Ответственные лица -->
        <div class="form-group">
          <label class="form-label">Ответственные лица</label>
          <div class="responsible-persons">
            <div class="person">Иван Иванов</div>
            <div class="person">Елена Иванова</div>
            <button class="add-person-button">+</button>
          </div>
          <div class="underline"></div>
        </div>

        <!-- Дополнительная информация -->
        <div class="form-group">
          <label class="form-label">Дополнительная информация</label>
          <div class="input-wrapper">
            <input
                type="text"
                class="form-input"
                placeholder="Добавить комментарий"
            />
            <div class="underline"></div>
          </div>
        </div>
      </div>

      <!-- Кнопки -->
      <div class="modal-actions-new-book">
        <button class="modal-button-new-book modal-button--confirm" @click="confirmBooking">
          Забронировать
        </button>
        <button class="modal-button-new-book modal-button--cancel" @click="closeModal">
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false); // Видимость модального окна
const selectedTimes = ref<string[]>([]); // Выбранные времена

// Список временных слотов
const timeSlots = [
  '08.00 - 09.00',
  '09.00 - 10.00',
  '10.00 - 11.00',
  '11.00 - 12.00',
  '12.00 - 13.00',
  '13.00 - 14.00',
  '14.00 - 15.00',
  '15.00 - 16.00',
  '16.00 - 17.00',
  '17.00 - 18.00',
  '18.00 - 19.00',
  '19.00 - 20.00',
];

// Выбор времени
const toggleTime = (time: string) => {
  if (selectedTimes.value.includes(time)) {
    selectedTimes.value = selectedTimes.value.filter((t) => t !== time);
  } else {
    selectedTimes.value.push(time);
  }
};

// Закрытие модального окна
const closeModal = () => {
  isVisible.value = false;
  selectedTimes.value = []; // Сброс выбранных времён
};

// Подтверждение бронирования
const confirmBooking = () => {
  if (selectedTimes.value.length > 0) {
    alert(`Бронирование на ${selectedTimes.value.join(', ')} подтверждено!`);
    closeModal();
  } else {
    alert('Пожалуйста, выберите время.');
  }
};

// Открытие модального окна
const openModal = () => {
  isVisible.value = true;
};

// Экспортируем функции для использования в родительском компоненте
defineExpose({ openModal });
</script>

<style scoped>
/* Стили для модального окна */
.modal-overlay-new-book {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-new-book {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: auto;
  padding: 20px;
}

.modal-header-new-book {
  margin-top: -30px;
}

.modal-title-new-book{
  font-size: 30px;
  font-weight: normal;
  color: #333;
  text-align: left;
}

.modal-content-new-book {
  margin-bottom: 20px;
  text-align: left;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  font-size: 14px;
  color: #000000;
  margin-bottom: 8px;
  display: block;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 8px;
  background: transparent;
  border: none;
  font-size: 14px;
}

.form-input:focus {
  outline: none;
}

.input-wrapper .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #ccc;
}

.time-slots {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.time-slot {
  padding: 8px;
  background: #DCE7E6;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.time-slot.active {
  background: #86AEAA;
  color: white;
}

.responsible-persons {
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
  margin-bottom: 8px;
}

.responsible-persons .underline {
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 1px;
  background: #ccc;
}

.person {
  font-size: 12px;
  padding: 5px 15px;
  background: #86AEAA;
  height: auto;
  border-radius: 4px;
  text-align: center;
  color: white;
}

.add-person-button {
  background: none;
  border: none;
  font-size: 10px;
  cursor: pointer;
  color: #43716b;
}

.modal-actions-new-book {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.modal-button-new-book {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.modal-button--confirm {
  background: #43716b;
  color: white;
  flex: 4;
}

.modal-button--cancel {
  background: #f2f2f2;
  color: #333;
  flex: 1;
}

.modal-button--confirm:hover {
  background: #2c4945;
}

.modal-button--cancel:hover {
  background: #e2e6ea;
}
</style>