const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "/home",
        component: () => import("pages/HomePage.vue"),
        props: (route) => ({ darkMode: route.query.darkMode === "true" }),
      },
      {
        path: "blog",
        component: () => import("pages/BlogPage.vue"),
        props: (route) => ({ darkMode: route.query.darkMode === "true" }),
      },
      {
        path: "blog/:articleSlug",
        component: () => import("pages/ArticlePage.vue"),
        props: true,
      },
      {
        path: "projects",
        component: () => import("pages/ProjectsPage.vue"),
        props: (route) => ({ darkMode: route.query.darkMode === "true" }),
      },
      {
        path: "about",
        component: () => import("pages/AboutPage.vue"),
        props: (route) => ({ darkMode: route.query.darkMode === "true" }),
      },
      {
        path: "cgu",
        component: () => import("pages/CguPage.vue"),
        props: (route) => ({ darkMode: route.query.darkMode === "true" }),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
