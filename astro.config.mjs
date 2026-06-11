// @ts-check
import { defineConfig } from "astro/config"
import icon from "astro-icon"

// Wraps every markdown image in a link to its own source, so readers can
// click through to the full-resolution file.
function rehypeLinkImages() {
    return (tree) => {
        const wrapImages = (node) => {
            if (!node.children) return
            node.children.forEach((child, index) => {
                if (
                    child.type === "element" &&
                    child.tagName === "img" &&
                    child.properties?.src
                ) {
                    node.children[index] = {
                        type: "element",
                        tagName: "a",
                        properties: {
                            href: child.properties.src,
                            target: "_blank",
                            rel: "noopener noreferrer",
                        },
                        children: [child],
                    }
                } else {
                    wrapImages(child)
                }
            })
        }
        wrapImages(tree)
    }
}

// https://astro.build/config
export default defineConfig({
    site: "https://fayleemb.com",
    markdown: {
        rehypePlugins: [rehypeLinkImages],
    },
    vite: {
        build: {
            cssCodeSplit: false,
        },
    },
    integrations: [icon()],
})
