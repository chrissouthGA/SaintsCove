import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import blog from "./sanity/schemas/blog-schema";


const config = defineConfig({
    projectId: 'bqz1l84d',
    dataset: 'production',
    title: 'SaintsCove Blog',
    apiVersion: '2024-02-21',
    basePath: '/admin',
    plugins: [deskTool()], 
    schema: {types:[ blog ]},   
})



export default config;