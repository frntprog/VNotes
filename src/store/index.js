import { createStore } from "vuex";
import { notesModule } from "./notesModule";

export default createStore({
  modules: {
    notes: notesModule,
  },
});
