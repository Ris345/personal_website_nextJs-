/**
 * Scaffolds a draft post: `npm run new-post "My post title"`.
 */
const fs = require("fs")
const path = require("path")

const title = process.argv.slice(2).join(" ").trim()

if (!title) {
  console.error('Usage: npm run new-post "My post title"')
  process.exit(1)
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")

const date = new Date().toISOString().slice(0, 10)
const file = path.join(__dirname, "..", "content", "blog", `${slug}.md`)

if (fs.existsSync(file)) {
  console.error(`${file} already exists.`)
  process.exit(1)
}

// Quoted title so colons and apostrophes can't break the YAML.
const template = `---
title: ${JSON.stringify(title)}
date: "${date}"
excerpt: ""
tags: []
draft: true
---

Write here. Set \`draft: false\` when it's ready to publish.
`

fs.mkdirSync(path.dirname(file), { recursive: true })
fs.writeFileSync(file, template)
console.log(`Created content/blog/${slug}.md`)
