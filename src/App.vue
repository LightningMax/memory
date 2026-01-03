<script setup>
import Board from "./components/Board.vue";
import HistoryTable from "./components/HistoryTable.vue";
import { useGameLogic } from "./composables/useGameLogic";
import { useHistory } from "./composables/useHistory";

const game = useGameLogic();
const { addGame } = useHistory();
</script>

<template>
  <button @click="game.resetGame">replay</button>

  <Board
    :cards="game.cards.value"
    :hasWon="game.hasWon.value"
    :moves="game.moves.value"
    @flip="game.flipCard"
    @saveGame="addGame"
    @replay="game.resetGame"
  />

  <HistoryTable />
</template>
