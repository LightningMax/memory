<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Félicitations !</h2>
      <p>Score : {{ moves }} essais en {{ time }} secondes.</p>

      <div class="input-group">
        <label>Entre ton pseudo :</label>
        <input v-model="pseudo" type="text" placeholder="Ex: MasterMind" />
      </div>

      <button :disabled="!pseudo" @click="saveAndClose">
        Enregistrer ma partie
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// On reçoit les stats de la partie via des "props"
const props = defineProps(["time", "moves", "difficulty"]);
const emit = defineEmits(["save"]); // Pour envoyer l'événement au parent

const pseudo = ref("");

const saveAndClose = () => {
  emit("save", {
    pseudo: pseudo.value,
    // time: props.time,
    moves: props.moves,
    // difficulty: props.difficulty,
  });
};
</script>
