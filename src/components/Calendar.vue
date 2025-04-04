<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const isActive = (path: string) => {
  return route.path === path;
};
const navigateTo = (path: string) => {
  router.push(path);
};
const currentDate = ref(new Date());
const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const monthYear = computed(() => {
  const month = currentDate.value.toLocaleString('ru', { month: 'long' });
  const year = currentDate.value.getFullYear();
  return `${month} ${year}`;
});
const years = Array.from({ length: 31 }, (_, i) => 2000 + i);
const days = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay() || 7;
  const daysArray = [];
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDay - 1; i > 0; i--) {
    daysArray.push({
      value: prevMonthLastDay - i + 1,
      className: 'other-month',
      isToday: false,
      isWeekend: false,
    });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    daysArray.push({
      value: i,
      className: '',
      isToday:
          i === new Date().getDate() &&
          month === new Date().getMonth() &&
          year === new Date().getFullYear(),
      isWeekend: date.getDay() === 6 || date.getDay() === 0,
    });
  }
  const nextMonthDays = 7 - (daysInMonth + startDay - 1) % 7;
  for (let i = 1; i <= nextMonthDays; i++) {
    daysArray.push({
      value: i,
      className: 'other-month',
      isToday: false,
      isWeekend: false,
    });
  }

  return daysArray;
});
const prevMonth = () => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() - 1);
  currentDate.value = newDate;
};
const nextMonth = () => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() + 1);
  currentDate.value = newDate;
};
const changeYear = (event: Event) => {
  const newYear = parseInt((event.target as HTMLSelectElement).value);
  const newDate = new Date(currentDate.value);
  newDate.setFullYear(newYear);
  currentDate.value = newDate;
};
</script>
<template>
  <div class="calendar">
    <div class="calendar-header">
      <div class="header-left">
        <h2>{{ monthYear }}</h2>
      </div>
      <div class="header-right">
        <select class="year-select" @change="changeYear">
          <option v-for="year in years" :key="year" :value="year" :selected="year === currentDate.getFullYear()">
            {{ year }}
          </option>
        </select>
        <button class="nav-button" @click="prevMonth">‹</button>
        <button class="nav-button" @click="nextMonth">›</button>
      </div>
    </div>
    <div class="weekdays">
      <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
    </div>
    <div class="days">
      <div
          v-for="(day, index) in days"
          :key="index"
          :class="[
          'day',
          day.className,
          { today: day.isToday, weekend: day.isWeekend }
        ]"
      >
        {{ day.value }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  width: 350px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.calendar-header h2 {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  margin: 0;
  font-size: 20px;
  color: #333;
}

.year-select {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  background-color: #fff;
  transition: border-color 0.2s;
}

.year-select:hover {
  border-color: #007bff;
}

.nav-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
  padding: 5px;
  border-radius: 40%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.nav-button:hover {
  background-color: #f0f0f0;
}

.weekdays {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 12px;
  color: #004636;
  font-weight: 400;
}

.weekdays .weekday {
  flex: 1;
  text-align: center;
  min-width: 40px;
}

.days {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.days .day {
  flex: 1;
  min-width: 40px;
  height: 40px;
  text-align: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  border-radius: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}
.days .day.other-month {
  color: #999;
}
.days .day.weekend {
  color: #ff4d4d;
}
.days .day.today {
  background-color: #43716B;
  color: #fff;
  font-weight: 400;
}
.days .day:hover {
  background-color: #f0f0f0;
}
</style>