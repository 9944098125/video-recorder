import { combineReducers } from "redux";
import toggle from "./toggle";

export const rootReducer = combineReducers({
	toggle,
});

export interface RootState {
	toggle: {
		close: boolean;
	};
}
