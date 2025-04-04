<script setup lang="ts">
import '../assets/people.css';
import Calendar from '@/components/Calendar.vue';
import Header from "@/components/Header.vue";
import PersonCard from "@/components/PersonCard.vue";
import InvitationCard from "@/components/InvitationCard.vue";
import { onMounted, onUnmounted } from 'vue';
import NewBookingModal from '@/components/NewBookingModal.vue';
import { ref } from 'vue';
import BookingModal from "@/components/BookingModal.vue";

const NewBookingModalRef = ref();

// Функция для открытия модального окна
const openBookingModal = () => {
  NewBookingModalRef.value.openModal();
};

onMounted(() => {
  document.body.classList.add('people-page');
});

onUnmounted(() => {
  document.body.classList.remove('people-page');
});

const people = [
  {
    photoUrl: 'https://i.imgur.com/AS31GXc.png',
    photoLabel: 'Фотограф',
    name: 'Иван Иванов',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты.',
  },
  {
    photoUrl: 'https://i.imgur.com/QH0cQxG.png',
    photoLabel: 'Дизайнер',
    name: 'Мария Петрова',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты.',
  },
  {
    photoUrl: 'https://i.imgur.com/AS31GXc.png',
    photoLabel: 'Фотограф',
    name: 'Алексей Смирнов',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты.',
  },
  {
    photoUrl: 'https://i.imgur.com/QH0cQxG.png',
    photoLabel: 'Видеооператор',
    name: 'Дмитрий Кузнецов',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты.',
  },
  {
    photoUrl: 'https://i.imgur.com/AS31GXc.png',
    photoLabel: 'Фотограф',
    name: 'Елена Васильева',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты.',
  },
  {
    photoUrl: 'https://i.imgur.com/QH0cQxG.png',
    photoLabel: 'Дизайнер',
    name: 'Ольга Иванова',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты.',
  },
  {
    photoUrl: 'https://i.imgur.com/AS31GXc.png',
    photoLabel: 'Фотограф',
    name: 'Сергей Петров',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты.',
  },
  {
    photoUrl: 'https://i.imgur.com/QH0cQxG.png',
    photoLabel: 'Видеооператор',
    name: 'Анна Соколова',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты.',
  },
];

const invitations = [
  {
    title: "Съёмки в первомайском",
    time: "10.00 - 12.00",
    name: "Иванов И. В.",
    profession: "Фотограф",
  },
  {
    title: "Съёмки в первомайском",
    time: "10.00 - 12.00",
    name: "Иванов И. В.",
    profession: "Фотограф",
  },
];


</script>

<template>
  <Header />
  <div class="people-page-container">
    <div class="people-search-container">
      <i class="fas fa-search search-icon"></i>
      <input class="search-input" type="text" placeholder="Поиск"/>
      <div class="people-select-container">
        <select class="people-select-select">
          <option value="1">По алфавиту</option>
          <option value="2">По убыванию</option>
          <option value="3">По дате и времени</option>
          <option value="4">По возрастанию</option>
        </select>
      </div>
      <div class="add-button-container">
        <button class="add-button" @click="openBookingModal">Добавить</button>
      </div>
    </div>
    <div class="people-list">
      <PersonCard
          v-for="(person, index) in people"
          :key="index"
          :photoUrl="person.photoUrl"
          :photoLabel="person.photoLabel"
          :name="person.name"
          :description="person.description"
      />
    </div>
    <div class="people-page-calendar">
      <Calendar />
      <div class="active-invitations-section">
        <div class="section-title">Активные приглашения</div>
        <div class="invitations-list">
          <InvitationCard
              v-for="(invitation, index) in invitations"
              :key="index"
              :title="invitation.title"
              :time="invitation.time"
              :name="invitation.name"
              :profession="invitation.profession"
          />
        </div>
      </div>
    </div>
  </div>
  <NewBookingModal ref="NewBookingModalRef" />
</template>

<style scoped>
</style>