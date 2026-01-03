<template>
  <div class="stats-container">
    <div class="stat-card">
      <h3>Parties jouées</h3>
      <p class="stat-value">{{ totalGames }}</p>
    </div>

    <div class="stat-card">
      <h3>Meilleur Temps</h3>
      <p class="stat-value">{{ bestTime }}s</p>
    </div>

    <div class="stat-card">
      <h3>Moyenne d'essais</h3>
      <p class="stat-value">{{ avgMoves }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// On reçoit la liste des parties du parent
const props = defineProps({
  games: {
    type: Array,
    required: true,
  },
});

// 1. Calcul du nombre total de parties
const totalGames = computed(() => props.games.length);

// 2. Calcul du meilleur temps (le plus petit nombre de secondes)
const bestTime = computed(() => {
  if (props.games.length === 0) return 0;
  // On extrait tous les temps et on prend le minimum
  const times = props.games.map((g) => g.time);
  return Math.min(...times);
});

// 3. Calcul de la moyenne des essais (coups joués)
const avgMoves = computed(() => {
  if (props.games.length === 0) return 0;
  const totalMoves = props.games.reduce((sum, g) => sum + g.moves, 0);
  // On arrondit à une décimale pour que ce soit propre
  return (totalMoves / props.games.length).toFixed(1);
});
</script>
