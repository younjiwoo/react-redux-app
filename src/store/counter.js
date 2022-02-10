import { createSlice, configureStore } from '@reduxjs/toolkit';

// Counter.js에서 state.counter.counter인 이유:
const initialCounterState = {
	counter: 0,
	isCounterVisible: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			// we can mutate the state:
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.isCounterVisible = !state.isCounterVisible;
		},
	},
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

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
