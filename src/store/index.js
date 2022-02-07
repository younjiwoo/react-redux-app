import { createStore } from 'redux';

const initialState = { counter: 0, isCounterVisible: true };

const counterReducer = (state = initialState, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
			isCounterVisible: state.isCounterVisible,
		};
	}

	if (action.type === 'increase') {
		return {
			counter: state.counter + action.amount,
			isCounterVisible: state.isCounterVisible,
		};
	}

	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
			isCounterVisible: state.isCounterVisible,
		};
	}

	if (action.type === 'toggle') {
		return {
			isCounterVisible: !state.isCounterVisible,
			counter: state.counter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
