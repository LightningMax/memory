<script setup>
import Card from "./Card.vue";
import ScoreModal from "./ScoreModal.vue";

defineProps({
  cards: Array,
  hasWon: Boolean,
  moves: Number,
});

const emit = defineEmits(["flip", "saveGame", "replay"]);
</script>

<template>
  <ScoreModal
    v-if="hasWon"
    :moves="moves"
    @save="emit('saveGame', $event)"
    @replay="emit('replay')"
  />

  <div class="cards">
    <Card
      v-for="card in cards"
      :key="card.id"
      :card="card"
      @select="emit('flip', card)"
    />
  </div>
</template>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 400px;
}
</style>
