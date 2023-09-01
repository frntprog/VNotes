export const notesModule = {
  state: () => ({
    notes: [],
  }),

  getters: {
    sortedByDateNotes(state) {},
    allNotes(state) {
      return state.notes;
    },
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },
  },
};
