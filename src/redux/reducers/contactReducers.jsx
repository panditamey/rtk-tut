const contactReducer = {
  addContact: (state, action) => {
    state.push(action.payload);
  },
  deleteContact: (state, action) => {
    let index = state.findIndex((contact) => contact.id === action.payload);
    state.splice(index, 1);
  },
};
export default contactReducer;
