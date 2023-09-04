<template>
  <div>
    <div class="m-4">
      <span
        class="text-3xl cursor-pointer text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Notion
      </span>
    </div>
    <button
      class="absolute top-0 right-0 m-5 bg-transparent ease-out duration-300 hover:bg-sky-400 text-sky-400 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded"
      @click="isModalOpen = true"
    >
      Create Note
    </button>
    <NoteList class="mt-24 px-24 grid grid-cols-4 gap-6" />
    <Modal @hideModal="setModalVisibilty" :isModalOpen="isModalOpen" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./components/Modal.vue";
import NoteList from "./components/NoteList.vue";

const isModalOpen = ref(false);

function setModalVisibilty() {
  isModalOpen.value = false;
}
</script>
