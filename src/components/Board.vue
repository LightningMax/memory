<script setup>
import { useGameLogic } from "@/composables/useGameLogic";
import Card from "./Card.vue";
const { cards, hasWon, moves, flipCard } = useGameLogic();
</script>

<template>
  <div v-if="hasWon">
    <p>You win!</p>
  </div>
  <p>moves: {{ moves }}</p>
  <div class="cards">
    <Card
      v-for="card in cards"
      :key="card.id"
      :card="card"
      @select="flipCard"
    />
  </div>
  <pre>{{ cards }}</pre>
</template>

<style>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 400px;
}
</style>
