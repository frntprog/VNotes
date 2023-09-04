<template>
  <div
    class="relative cursor-pointer py-3 px-4 h-[10rem] break-words"
    :style="{ background: props.color }"
  >
    <p class="font-semibold">{{ truncateWords(props.text, 73) }}</p>
    <span class="absolute bottom-1 right-3 font-mono text-xs">{{
      props.timestamp
    }}</span>
  </div>
</template>

<script setup>
import truncateWords from "../utilities/truncateWords.js";

const props = defineProps(["text", "timestamp", "color"]);
</script>
