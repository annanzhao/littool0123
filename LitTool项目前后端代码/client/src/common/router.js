import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
    { path: "/selection", component: () => import("../views/dashboard/Selection.vue") },
    { path: "/", component: () => import("../views/HomePage.vue") },
    { path: "/detail", component: () => import("../views/Detail.vue") },
    { path: "/register", component: () => import("../views/Register.vue") },
    { path: "/login", component: () => import("../views/Login.vue") },
    {
        path: "/dashboard", component: () => import("../views/dashboard/Dashboard.vue"), children: [
            { path: "/dashboard/introGenius", component: () => import("../views/dashboard/IntroGenius.vue") },
            { path: "/dashboard/overview", component: () => import("../views/dashboard/Overview.vue") },
            { path: "/dashboard/design", component: () => import("../views/dashboard/Design.vue") },
            { path: "/dashboard/findings", component: () => import("../views/dashboard/Findings.vue") },
            { path: "/dashboard/chapter", component: () => import("../views/dashboard/Chapter.vue") },
            { path: "/dashboard/background", component: () => import("../views/dashboard/Background.vue") },
            { path: "/dashboard/project", component: () => import("../views/dashboard/Project.vue") },
            { path: "/dashboard/literature", component: () => import("../views/dashboard/Literature.vue") },
            { path: "/dashboard/contribution", component: () => import("../views/dashboard/Contribution.vue") },
            { path: "/dashboard/direction", component: () => import("../views/dashboard/Direction.vue") },
            { path: "/dashboard/selection", component: () => import("../views/dashboard/Selection.vue") },
            { path: "/dashboard/generate", component: () => import("../views/dashboard/Generate.vue") },
            { path: "/dashboard/upload", component: () => import("../views/dashboard/Upload.vue") },
            { path: "/dashboard/startCitation", component: () => import("../views/dashboard/StartCitation.vue") },  
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { router, routes };