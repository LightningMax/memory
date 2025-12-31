<script setup>
import Card from "./Card.vue";
import { cards, flipCard } from "@/composables/useGameLogic";
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
