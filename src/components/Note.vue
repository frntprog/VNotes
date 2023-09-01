<template>
  <p>{{ text }}</p>
  <span>{{ timestamp }}</span>
  <pre>{{ color }}</pre>
</template>

<script setup>
const { text, timestamp, color } = defineProps({
  text: String,
  timestamp: String,
  color: String,
});
</script>
