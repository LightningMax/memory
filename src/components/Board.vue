<script setup>
import { useGameLogic } from "@/composables/useGameLogic";
import Card from "./Card.vue";
const { cards, flipCard } = useGameLogic();
</script>

<template>
  <pre>{{ cards }}</pre>
  <div class="cards">
    <Card
      v-for="card in cards"
      :key="card.id"
      :card="card"
      @select="flipCard"
    />
  </div>
</template>

<style>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 400px;
}
</style>
