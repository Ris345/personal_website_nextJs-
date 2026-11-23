---
title: "Why I'm Writing Here Instead of Medium"
date: "2026-11-22"
excerpt: "Moving my writing onto infrastructure I own, and what I plan to write about."
tags: ["meta", "writing"]
draft: false
---

I've been publishing on Medium for a while. It works, but the posts live on
someone else's platform: their paywall, their recommendation algorithm, their
layout, their analytics. For someone who spends all day thinking about
infrastructure ownership, that always felt a little off.

So the blog now lives here, on my own site.

## How it works

Every post is a markdown file in `content/blog/`. Writing one means creating a
file, committing it, and pushing — the site rebuilds and the post is live. No
editor, no draft UI, no lock-in.

The frontmatter at the top of each file controls everything:

```yaml
---
title: "Your post title"
date: "2026-11-22"
excerpt: "One or two sentences for the listing page and search results."
tags: ["observability", "aws"]
draft: false
# canonicalUrl: "https://medium.com/@rishavacharya_345/..."
---
```

Set `draft: true` and the post shows up in `npm run dev` but stays off the
published site. Set `canonicalUrl` when a post ran somewhere else first, so the
original keeps the search credit.

## What I'll write about

Mostly the things I work on and get asked about:

- Observability that answers questions instead of producing dashboards
- Chaos engineering as a practice, not a demo
- AWS cost and reliability, which are more related than people expect
- The emerging infrastructure layer underneath AI products

More soon.
