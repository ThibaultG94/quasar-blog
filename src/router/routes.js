const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "blog", component: () => import("pages/BlogPage.vue") },
      { path: "projects", component: () => import("pages/ProjectsPage.vue") },
      { path: "cg", component: () => import("pages/CGPage.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
