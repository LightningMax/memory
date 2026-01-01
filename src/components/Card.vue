<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["select"]);

function handleClick() {
  emit("select", props.card);
}
</script>

<template>
  <div class="card" @click="handleClick">
    {{ props.card.isFlipped || props.card.isMatched ? props.card.value : "?" }}
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
  width: 50px;
  text-align: center;
}
</style>
