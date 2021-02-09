import api from "../../api/imgur";

const state = {
	images: [],
};

const getters = {
	getImages: (state) => state.images,
};

// rootState is a built-in reference to all state held in our vuex store
// we can use rootState to reach into another module and use the state properties from that module
// each of our modules named in our state export becomes a property of rootState, so we can access it using dot notation
// then access the state properties in that module using dot notation; we can also do this using ES2015 destructuring
// which is ideal in this case because we want to be able to pass the token we access in our auth module to our
// fetchImages method
const actions = {
	useImages: async ({ rootState, commit }) => {
		const { token } = rootState.auth;
		const response = await api.fetchImages(token);
		commit("setImages", response.data.data);
	},
};

const mutations = {
	setImages: (state, images) => {
		state.images = images;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
