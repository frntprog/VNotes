<template>
  <Teleport to="#modal">
    <div
      v-if="isModalOpen"
      class="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 flex justify-center items-center"
    >
      <div ref="modal" class="relative bg-white px-12 py-24 rounded shadow-md">
        <button @click="hide" class="absolute top-0 right-2">x</button>
        Click outside to close it
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const { isModalOpen } = defineProps({
  isModalOpen: Boolean,
});

const emit = defineEmits(["hideModal"]);
const modal = ref(null);

function hide() {
  emit("hideModal");
}

onClickOutside(modal, () => hide());
</script>
