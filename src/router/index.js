import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AuthHandler from "../components/AuthHandler.vue";
import Error from "../components/Error.vue";
import ImageList from "../components/ImageList.vue";
import UploadForm from "../components/UploadForm.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/gallery",
		name: "gallery",
		component: ImageList,
	},
	{
		path: "/upload",
		name: "upload",
		component: UploadForm,
	},
	{
		path: "/oauth2/callback",
		name: "callback",
		component: AuthHandler,
	},
	{
		path: "*",
		component: Error,
	},
];

// Mode: history tells Vue Router to use browser router, not hash router and is usually the preferrable option
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
