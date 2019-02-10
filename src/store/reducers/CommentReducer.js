const initState = {
  comment: [
    {
      id: "1",
      name: "Jabi Hernandiz",
      date: "May 2016",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam."
    },
    {
      id: "2",
      name: "Jabi Hernandiz",
      date: "May 2016",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam."
    },
    {
      id: "3",
      name: "Jabi Hernandiz",
      date: "May 2016",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam."
    }
  ]
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comment: [
          {
            id: "1",
            name: "Jabi Hernandiz",
            date: "May 2016",
            body: state.message
          }
        ]
      };
  }

  return state;
};

export default commentReducer;
