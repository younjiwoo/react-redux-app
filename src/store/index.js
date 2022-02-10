// import { createStore } from 'redux';
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

const initialAuthState = {
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

// const store = createStore(counterReducer);
const store = configureStore({
	// reducer: counterSlice.reducer,
	reducer: {
		counter: counterSlice.reducer, // Counter.js에서 state.counter.counter인 이유:
		auth: authSlice.reducer,
	},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
