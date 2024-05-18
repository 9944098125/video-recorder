const initialState = {
	close: false,
};

export default function toggle(state = initialState, action: any) {
	switch (action.type) {
		case "TOGGLE_SIDEBAR":
			return {
				...state,
				close: !state.close,
			};
		default:
			return state;
	}
}
