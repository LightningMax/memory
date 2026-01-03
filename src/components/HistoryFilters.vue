<template>
  <div class="filters">
    <span>Trier par :</span>
    <button @click="$emit('sort', 'time')">Temps</button>
    <button @click="$emit('sort', 'moves')">Essais</button>
    <button @click="$emit('sort', 'date')">Date</button>
  </div>
</template>

<script setup>
defineEmits(["sort"]);
</script>
