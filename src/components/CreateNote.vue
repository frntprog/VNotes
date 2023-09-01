<template>
  <div>
    <div>
      <textarea
        rows="5"
        type="text"
        v-model="text"
        class="block m-3 p-2.5 w-5/6 text-sm focus:outline-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg border border-gray-300 focus:border-blue-500"
        placeholder="Write a note..."
      ></textarea>
    </div>
    <div class="absolute bottom-0 right-0 m-5">
      <button
        class="bg-transparent ease-out duration-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded mr-3"
      >
        Clear
      </button>
      <button
        @click="createNote"
        class="ease-out duration-300 bg-blue-500 text-white font-semibold hover:bg-transparent hover:border-blue-500 hover:text-sky-400 py-1 px-3 border border-blue-500 hover:border-transparent rounded"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";

const emit = defineEmits("createNote");
const store = useStore();
const text = ref("");

const getRandomColor = () => {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
};

function createNote() {
  const note = {
    id: uuidv4(),
    text: text.value,
    timestamp: new Date().toLocaleDateString(),
    color: getRandomColor(),
  };
  store.commit("addNote", note);
  text.value = "";
}
</script>
