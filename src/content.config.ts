import { defineCollection, z } from "astro:content"

import { glob } from "astro/loaders"

const projects = defineCollection({
    loader: glob({ base: "./src/markdown/projects", pattern: "*.md" }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        image: z.string(),
        link: z.string().optional(),
        github: z.string().optional(),
        type: z.union([z.literal("project"), z.literal("post")]),
        features: z.string().array(),
        posted: z.boolean(),
        description: z.string(),
    }),
})

export const collections = { projects }
