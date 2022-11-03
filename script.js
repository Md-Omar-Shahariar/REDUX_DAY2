//select dom element

const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

//initial State
const initialState = {
  value: 0,
};

//create reducer function

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return { ...state };
  }
}

//create Store

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};
render();

store.subscribe(render);

//button click listener

incrementEl.addEventListener("click", () => {
  store.dispatch(increment(2));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(3));
});
