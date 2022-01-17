/** @format */

import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import ReadMore from "../views/ReadMore.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/read/:id",
		name: "ReadMore",
		component: ReadMore,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router
