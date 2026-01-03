<template>
  <div class="history-container">
    <h2>Historique des Parties</h2>

    <HistoryStats :games="history" />

    <HistoryFilters @sort="sortHistory" />

    <table>
      <thead>
        <tr>
          <th>Joueur</th>
          <th>Niveau</th>
          <th>Temps</th>
          <th>Essais</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <HistoryRow
          v-for="game in sortedHistory"
          :key="game.id"
          :game="game"
          @update="updatePseudo"
          @delete="deleteGame"
        />
      </tbody>
    </table>

    <button class="btn-danger" @click="clearAll">Reset de l'historique</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useHistory } from "../composables/useHistory";
import HistoryRow from "./HistoryRow.vue";
import HistoryFilters from "./HistoryFilters.vue";
import HistoryStats from "./HistoryStats.vue";

const { history, deleteGame, clearAll, updatePseudo, loadHistory } =
  useHistory();
const currentSort = ref("date");

onMounted(() => loadHistory());

// Logique de tri dynamique
const sortedHistory = computed(() => {
  return [...history.value].sort((a, b) => {
    if (currentSort.value === "date") return b.id - a.id;
    return a[currentSort.value] - b[currentSort.value];
  });
});

const sortHistory = (criteria) => {
  currentSort.value = criteria;
};
</script>
