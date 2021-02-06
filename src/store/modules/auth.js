import api from "../../api/imgur";
import qs from "qs";

// This is initial state
const state = {
	token: window.localStorage.getItem("imgur_token"),
};

// Remember that the "state" param we're passing to getters is not the same current value as the state constant above; we are passing in an updated state
const getters = {
	isLoggedIn: (state) => {
		// The !! here turns our state param into a boolean with a falsy or truthy value, e.g. either null (false) or has a token value (true)
		return !!state.token;
	},
};

// We never call a mutation directly, we call mutations via actions
// On finalizeLogin as well as state, we're using local storage to persist login. The reason for using local storage vs a cookie is that cookies are meant for passing
// and reading server-side vs local storage, which is client-side. Since our app only needs to know if the user is logged in on the client side (we have no back end
// that needs to know), we use local storage. If we had a database that needed to know if the user was logged in, we'd use a cookie.
const actions = {
	login: () => {
		api.login();
	},
	logout: ({ commit }) => {
		// Committing the setToken mutation and because we are logging the user out, we're passing in the value back to the token of null
		commit("setToken", null);
		window.localStorage.removeItem("imgur_token");
	},
	finalizeLogin: ({ commit }, hash) => {
		const parsedHash = qs.parse(hash.replace("#", ""));
		commit("setToken", parsedHash.access_token);
		window.localStorage.setItem("imgur_token", parsedHash.access_token);
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
