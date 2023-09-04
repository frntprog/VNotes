<template>
  <Teleport to="#modal">
    <Transition
      name="modal"
      enter-active-class="duration-300 ease-out"
      enter-from-class="transform opacity-0"
      leave-active-class="duration-200 ease-in"
      leave-to-class="transform opacity-0"
    >
      <div
        v-if="isModalOpen"
        class="z-40 fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center"
      >
        <div
          ref="modal"
          class="relative bg-white w-80 h-60 rounded shadow-md p-4"
        >
          <button @click="hide" class="absolute top-0 right-2">x</button>
          <CreateNote />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import CreateNote from "./CreateNote.vue";

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
