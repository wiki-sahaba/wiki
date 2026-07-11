import { defineCollection, z } from "astro:content"

const infoboxItem = z.object({
  label: z.string(),
  value: z.string(),
})

const referenceItem = z.object({
  title: z.string(),
  author: z.string().optional(),
  year: z.string().optional(),
  publisher: z.string().optional(),
})

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    categories: z.array(z.string()).optional(),
    description: z.string().optional(),
    infobox: z.object({
      name: z.string().optional(),
      tags: z.array(z.string()).optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      fields: z.array(infoboxItem),
    }).optional(),
    references: z.array(referenceItem).optional(),
  }),
})

export const collections = { articles }
