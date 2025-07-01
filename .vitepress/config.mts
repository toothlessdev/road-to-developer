import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Road To Developer",
    description: "개발자 취준을 위한 CS 지식 정리",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Algorithm", link: "/docs/algorithm/" },
            { text: "Computer Architecture", link: "/docs/computer-architecture/" },
            { text: "Data Structure", link: "/docs/data-structure/" },
            { text: "Database", link: "/docs/database/" },
            { text: "Network", link: "/docs/network/" },
            { text: "Operating System", link: "/docs/operating-system/" },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },

    vite: {
        plugins: [
            AutoSidebar({
                path: "docs",
            }),
        ],
    },
});
