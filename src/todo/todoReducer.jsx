const INITIAL_STATE = {
  description: "",
  list: []
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: actions.payload };
    case "TODO_SEARCHED":
      return { ...state, list: actions.payload };
    case "CLEAR_DESCRIPTION":
      return { ...state, description: "" };

    default:
      return state;
  }
};
