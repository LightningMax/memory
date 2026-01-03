<script setup>
import { useGameLogic } from "@/composables/useGameLogic";
import Card from "./Card.vue";
import ScoreModal from "./ScoreModal.vue";
import { useHistory } from "@/composables/useHistory";
const { cards, hasWon, moves, flipCard } = useGameLogic();
const { addGame } = useHistory();
</script>

<template>
  <div v-if="hasWon">
    <ScoreModal :moves="moves" @save="addGame" />
  </div>
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
