/* ==========================================================================
   Navigation
========================================================================== */

export function initializeNavigation() {

    initializeHeaderScroll();
    initializeActiveSection();
    initializeSmoothScroll();

}

/* ==========================================================================
   Header Scroll
========================================================================== */

function initializeHeaderScroll() {

    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    updateHeaderState(header);

    window.addEventListener(
        "scroll",
        () => updateHeaderState(header)
    );

}

/* ==========================================================================
   Header State
========================================================================== */

function updateHeaderState(header) {

    header.classList.toggle(
        "is-scrolled",
        window.scrollY > 10
    );

}

/* ==========================================================================
   Active Section
========================================================================== */

function initializeActiveSection() {

    const sections = document.querySelectorAll("main section");

    if (!sections.length) {
        return;
    }

    const observer = new IntersectionObserver(
        handleSectionIntersection,
        {
            root: null,
            rootMargin: "-35% 0px -45% 0px",
            threshold: 0
        }
    );

    sections.forEach(section => {

        observer.observe(section);

    });

}

/* ==========================================================================
   Section Observer
========================================================================== */

function handleSectionIntersection(entries) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        }

        setActiveNavigationLink(entry.target.id);

    });

}

/* ==========================================================================
   Active Link
========================================================================== */

function setActiveNavigationLink(sectionId) {

    const navigationLinks = document.querySelectorAll(".navbar__link");

    navigationLinks.forEach(link => {

        link.classList.toggle(
            "navbar__link--active",
            link.dataset.section === sectionId
        );

    });

}

/* ==========================================================================
   Smooth Scroll
========================================================================== */

function initializeSmoothScroll() {

    const navigationLinks = document.querySelectorAll(".navbar__link");

    navigationLinks.forEach(link => {

        link.addEventListener(
            "click",
            handleNavigationClick
        );

    });

}

/* ==========================================================================
   Navigation Click
========================================================================== */

function handleNavigationClick(event) {

    event.preventDefault();

    const targetSelector = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetSelector);

    if (!targetSection) {
        return;
    }

    targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}