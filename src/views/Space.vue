<template>
  <Header />
  <div class="spaces-page">
    <div class="spaces-list">
      <SpaceCard
          v-for="(space, index) in spaces"
          :key="index"
          :photoUrl="space.photoUrl"
          :bookingTimes="space.bookingTimes"
          :TitleCard="space.TitleCard"
      />
    </div>
    <div class="people-page-calendar-2">
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
</template>

<script setup lang="ts">
import '../assets/Space.css';
import Header from '../components/Header.vue';
import SpaceCard from "@/components/SpaceCard.vue";

import { onMounted, onUnmounted } from 'vue';
import Calendar from "@/components/Calendar.vue";
import InvitationCard from "@/components/InvitationCard.vue";
onMounted(() => {
  document.body.classList.add('space-page');
});
onUnmounted(() => {
  document.body.classList.remove('space-page');
});

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

const spaces = [
  {
    photoUrl: "https://i.imgur.com/hmRMFkn.png",
    TitleCard: "Коворкинг ИРНИТУ",
    bookingTimes: [
      "08.00 - 09.00", "09.00 - 10.00", "10.00 - 11.00", "11.00 - 12.00",
      "12.00 - 13.00", "13.00 - 14.00", "14.00 - 15.00", "15.00 - 16.00",
      "16.00 - 17.00", "17.00 - 18.00", "18.00 - 19.00", "19.00 - 20.00"
    ],
  },
  {
    photoUrl: "https://i.imgur.com/vkJyMIF.png",
    TitleCard: "Переговорная ИРНИТУ",
    bookingTimes: [
      "08.00 - 09.00", "09.00 - 10.00", "10.00 - 11.00", "11.00 - 12.00",
      "12.00 - 13.00", "13.00 - 14.00", "14.00 - 15.00", "15.00 - 16.00",
      "16.00 - 17.00", "17.00 - 18.00", "18.00 - 19.00", "19.00 - 20.00"
    ],
  },
];
</script>

<style scoped>

</style>