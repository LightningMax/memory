<template>
  <tr>
    <td>
      <input v-if="isEditing" v-model="tempPseudo" @keyup.enter="saveEdit" />
      <span v-else>{{ game.pseudo }}</span>
    </td>
    <td>{{ game.difficulty }}</td>
    <td>{{ game.time }}s</td>
    <td>{{ game.moves }}</td>
    <td>
      <button @click="isEditing ? saveEdit() : startEdit()">
        {{ isEditing ? "✅" : "✏️" }}
      </button>
      <button @click="$emit('delete', game.id)">🗑️</button>
    </td>
  </tr>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["game"]);
const emit = defineEmits(["update", "delete"]);

const isEditing = ref(false);
const tempPseudo = ref(props.game.pseudo);

const startEdit = () => {
  isEditing.value = true;
};

const saveEdit = () => {
  emit("update", props.game.id, tempPseudo.value);
  isEditing.value = false;
};
</script>
