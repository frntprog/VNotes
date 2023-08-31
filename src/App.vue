<template>
  <h1 class="text-3xl font-bold underline">Hello!</h1>
  <button @click="isModalOpen = true">Open Modal</button>
  <Modal @hideModal="setModalVisibilty" :isModalOpen="isModalOpen" />
</template>

<script setup>
import { ref } from "vue";
import Modal from "./components/Modal.vue";

const isModalOpen = ref(false);

function setModalVisibilty() {
  isModalOpen.value = false;
}
</script>
