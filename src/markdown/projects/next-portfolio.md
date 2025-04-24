---
title: "Next.js Portfolio"
date: "2021-12-01"
image: "next-portfolio"
link: "/"
github: "https://github.com/Serenacula/next-portfolio"
type: "project"
features: ["sass", "react", "next", "gsap"]
posted: true
description: "My previous portfolio site. I have rebuilt my portfolio several times, and this particular design was built twice: once in Gatsby, and once in Next. This is the Next.js version."
---

This is a complete reimplementation of my portfolio website, using Next.js.

Within the React ecosystem, there is two main web frameworks: Gatsby, which focuses on static sites, and Next.js, which focuses on server-rendered sites. After learning Gatsby, and having heard that Next.js now supported static rendering as well, I decided to learn Next.js to see how it compares.

To do this, I rebuilt my portfolio website using the different technology. Since this wasn't a visual redesign most of the visual elements remained the same, though a few parts received a soft refresh. The technology, however, is completely different.

Unlike Gatsby, Next.js doesn't enforce GraphQL, and instead encourages simple filesystem queries using Node's core packages. I found this a pleasant experience, as while GraphQL is an excellent and well-built technology, it was drastically over-engineered for my needs, and a simpler system was much preferred.

For CSS, I also moved to using Sass. This allowed me to refactor most of my code, making for _much_ simpler and easy-to-read code. Useful features like mixins and variables also meant I could maintain a consistent global style for colours centrally.

Overall, Next.js and Sass has been a very good move, and I will likely stick with these technologies in the future.
