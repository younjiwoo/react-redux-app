// create a store, not subscribe.
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'increment') {
		return {
			state: state.counter + 1,
		};
	}
	if (action.type === 'decrement') {
		return {
			state: state.counter - 1,
		};
	}
	return state;
};

const store = createStore(counterReducer);

export default store;
