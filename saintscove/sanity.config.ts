import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: 'bqz1l84d',
    dataset: 'production',
    title: 'SaintsCove Blog',
    apiVersion: '2024-21-02',
    basePath: '/admin',
    plugins: [deskTool()]
})

export default config;