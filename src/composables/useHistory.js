import { ref, onMounted, watch } from "vue";

// On initialise l'historique avec les données du localStorage ou un tableau vide
const history = ref([]);

export function useHistory() {
  // Charger les données au démarrage
  const loadHistory = () => {
    const saved = localStorage.getItem("memory_history");
    if (saved) {
      history.value = JSON.parse(saved);
    }
  };

  // Sauvegarder automatiquement quand l'historique change
  watch(
    history,
    (newHistory) => {
      localStorage.setItem("memory_history", JSON.stringify(newHistory));
    },
    { deep: true }
  );

  // Ajouter une partie
  const addGame = (game) => {
    // game = { id, pseudo, difficulty, time, moves }
    history.value.push({
      ...game,
      id: Date.now(), // ID unique basé sur le temps
      date: new Date().toLocaleString(),
    });
  };

  // Supprimer une partie
  const deleteGame = (id) => {
    history.value = history.value.filter((g) => g.id !== id);
  };

  // Tout effacer
  const clearAll = () => {
    if (confirm("Voulez-vous vraiment supprimer tout l'historique ?")) {
      history.value = [];
    }
  };

  // Modifier un pseudo
  const updatePseudo = (id, newPseudo) => {
    const game = history.value.find((g) => g.id === id);
    if (game) game.pseudo = newPseudo;
  };

  return { history, addGame, deleteGame, clearAll, updatePseudo, loadHistory };
}
