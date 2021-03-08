const INCREMENT = "number/INCREMENT";

export const increment = (size) => {
  return { type: INCREMENT, size };
};

const initialState = {
  number: 0,
};

export default function number(state = initialState, aciton) {
  switch (aciton.type) {
    case INCREMENT:
      return {
        number: state.number + aciton.size,
      };
    default:
      return state;
  }
}
