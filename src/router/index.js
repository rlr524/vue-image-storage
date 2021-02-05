import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AuthHandler from "../components/AuthHandler.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/oauth2/callback",
		name: "Callback",
		component: AuthHandler,
	},
];

// Mode: history tells Vue Router to use browser router, not hash router and is usually the preferrable option
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
