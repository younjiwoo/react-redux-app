import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, isCounterVisible: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			// we can mutate the state:
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.amount;
		},
		toggleCounter(state) {
			state.isCounterVisible = !state.isCounterVisible;
		},
	},
});

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'increment') {
// 		return {
// 			counter: state.counter + 1,
// 			isCounterVisible: state.isCounterVisible,
// 		};
// 	}

// 	if (action.type === 'increase') {
// 		return {
// 			counter: state.counter + action.amount,
// 			isCounterVisible: state.isCounterVisible,
// 		};
// 	}

// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 			isCounterVisible: state.isCounterVisible,
// 		};
// 	}

// 	if (action.type === 'toggle') {
// 		return {
// 			isCounterVisible: !state.isCounterVisible,
// 			counter: state.counter,
// 		};
// 	}

// 	return state;
// };

// const store = createStore(counterReducer);
const store = createStore(counterSlice.reducer);

export default store;
