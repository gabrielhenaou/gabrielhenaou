/* ==========================================================================
   Navigation
========================================================================== */

function initializeNavigation() {

    initializeSmoothScroll();
    initializeActiveLink();
    initializeNavbarScroll();

}

document.addEventListener("DOMContentLoaded", initializeNavigation);

/* ==========================================================================
   Smooth Scroll
========================================================================== */

function initializeSmoothScroll() {

}

/* ==========================================================================
   Active Link
========================================================================== */

function initializeActiveLink() {

    const sections = document.querySelectorAll("main section");
    const links = document.querySelectorAll("[data-section]");

    const navigationMap = new Map();

    links.forEach((link) => {

        navigationMap.set(
            link.dataset.section,
            link
        );

    });

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                if (activeLink) {
                    activeLink.classList.remove("is-active");
                }

                activeLink = navigationMap.get(
                    entry.target.id
                );

                if (activeLink) {
                    activeLink.classList.remove("is-active");
                }

            });

        },

        {
            threshold: 0.5
        }

    );

    sections.forEach((section) => observer.observe(section));

}

/* ==========================================================================
   Navbar Scroll
========================================================================== */

function initializeNavbarScroll() {

    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    const SCROLL_THRESHOLD = 20;

    let isScrolled = false;

    window.addEventListener("scroll", () => {

        const shouldScroll = window.scrollY > SCROLL_THRESHOLD;

        if (shouldScroll === isScrolled) {
            return;
        }

        isScrolled = shouldScroll;

        header.classList.toggle(
            "is-scrolled",
            isScrolled
        );

    });

}