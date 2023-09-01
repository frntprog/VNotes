<template>
  <div v-if="allNotes.length">
    <div v-for="note in allNotes" :key="note.id">
      <Note :text="note.text" :timestamp="note.timestamp" :color="note.color" />
    </div>
  </div>
  <div v-else>There is no notes</div>
</template>

<script setup>
import { useStore } from "vuex";
import Note from "./Note.vue";

const store = useStore();

const { allNotes } = store.getters;
</script>
