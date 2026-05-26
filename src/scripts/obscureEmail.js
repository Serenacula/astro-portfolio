setTimeout(() => {
    function unObscure(string) {
        return string
            .split(" art ")
            .join("@")
            .split(" doht ")
            .join(".")
            .split("corn")
            .join("com")
    }

    function reveal(span) {
        const name = span.getAttribute("data-giveName")
        const domain = span.getAttribute("data-giveDomain") ?? "gmail"
        const email = unObscure(name + " art " + domain + " doht " + "corn")

        const link = document.createElement("a")
        link.href = "mailto:" + email
        link.innerHTML = span.innerHTML
        if (span.hasAttribute("aria-label")) {
            link.setAttribute("aria-label", span.getAttribute("aria-label"))
        }

        span.replaceWith(link)
    }

    for (const span of document.querySelectorAll(".emailObscural")) {
        span.addEventListener("mouseenter", () => reveal(span), { once: true })
        span.addEventListener("focusin", () => reveal(span), { once: true })
        span.addEventListener("click", () => reveal(span), { once: true })
    }
}, 300)
