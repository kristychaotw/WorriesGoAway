
const Action = {
    CLICKR: "clickR",
    CLICKL: "clickL",
    PICK: "pick",
  };


const stampReducer=(state,action)=>{
    let newIndex = state.id;
    switch (action.type) {
        case Action.CLICKR:
          if (state.id <= animalList.length - 1) {
            newIndex = state.id;
          } else {
            newIndex = 0;
          }
          return animalList[newIndex];
  
        case Action.CLICKL:
          if (state.id <= 1) {
            newIndex = animalList.length - 1;
          } else {
            newIndex = state.id - 2;
          }
          return animalList[newIndex];
        case Action.PICK:
          state.picked = true;
          console.log("p-s:",state);
          return state;
        default:
          return state;
      }
    }

    export default stampReducer