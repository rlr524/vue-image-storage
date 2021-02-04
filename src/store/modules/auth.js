import api from "../../api/imgur";

// This is initial state
const state = {
	token: null,
};

// Remember that the "state" param we're passing to getters is not the same current value as the state constant above; we are passing in an updated state
const getters = {
	isLoggedIn: (state) => {
		// The !! here turns our state param into a boolean with a falsy or truthy value, e.g. either null (false) or has a token value (true)
		return !!state.token;
	},
};

// We never call a mutation directly, we call mutations via actions
const actions = {
	login: () => {
		api.login();
	},
	logout: ({ commit }) => {
		// Committing the setToken mutation and because we are logging the user out, we're passing in the value back to the token of null
		commit("setToken", null);
	},
};

// Same as with getters, the state param that we're passing into setToken is an updated state, not the state as set above
const mutations = {
	setToken: (state, token) => {
		state.token = token;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
