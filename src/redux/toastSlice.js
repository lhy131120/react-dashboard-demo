import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	messages: [],
};

const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		pushMessage: (state, action) => {
			const { text, status } = action.payload;
			const id = Date.now();

			// init and no action: state.messages === initialState.messages
			state.messages.push({
				id,
				text,
				status,
			});
		},
		removeMessage: (state, action) => {
			console.log("state: ", state);
			console.log("action: ", action);

			const idToRemove = action.payload;
			state.messages = state.messages.filter((msg) => msg.id !== idToRemove);
		},
	},
});

export const { pushMessage, removeMessage } = toastSlice.actions;

export default toastSlice.reducer;
