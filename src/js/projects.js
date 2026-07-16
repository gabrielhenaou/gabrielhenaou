/* ==========================================================================
   Imports
========================================================================== */

import { openProjectModal } from "./project-modal.js";

/* ==========================================================================
   Projects
========================================================================== */

const TABLET_BREAKPOINT = 900;
const MOBILE_BREAKPOINT = 600;

let currentIndex = 0;

let track = null;
let indicators = null;

/* ==========================================================================
   Initialization
========================================================================== */

export function initializeProjects() {

    track = document.querySelector(".projects__track");
    indicators = document.querySelector(".projects__indicators");

    if (!track || !indicators) {
        return;
    }

    synchronizeCarousel();

    initializeProjectCards();

    window.addEventListener(
        "resize",
        handleResize
    );

}

/* ==========================================================================
   Project Cards
========================================================================== */

function initializeProjectCards() {

    const buttons = document.querySelectorAll(".project-card__details");

    console.log("Buttons:", buttons);

    buttons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            console.log("Click detected");

            const card = button.closest(".project-card");

            if (!card) {
                return;
            }

            const projectId = card.dataset.project;

            console.log("Project ID:", projectId);

            openProjectModal(projectId);

        });

    });

}

/* ==========================================================================
   Visible Cards
========================================================================== */

function getVisibleCards() {

    if (window.innerWidth <= MOBILE_BREAKPOINT) {
        return 1;
    }

    if (window.innerWidth <= TABLET_BREAKPOINT) {
        return 2;
    }

    return 3;

}

/* ==========================================================================
   Indicator Creation
========================================================================== */

function createIndicators() {

    const cards = track.querySelectorAll(".project-card");

    const visibleCards = getVisibleCards();

    const totalPositions = Math.ceil(
        cards.length / visibleCards
    );

    indicators.innerHTML = "";

    for (let index = 0; index < totalPositions; index++) {

        const indicator = document.createElement("button");

        indicator.className = "projects__indicator";

        indicator.addEventListener(
            "click",
            () => {

                goToPosition(index);

            }
        );

        indicators.appendChild(indicator);

    }

}

/* ==========================================================================
   Track
========================================================================== */

function updateTrack() {

    const cards = track.querySelectorAll(".project-card");

    if (!cards.length) {
        return;
    }

    const visibleCards = getVisibleCards();

    const cardWidth = cards[0].offsetWidth;

    const gap = parseFloat(

        getComputedStyle(track).columnGap ||
        getComputedStyle(track).gap

    );

    const offset =
        currentIndex *
        (cardWidth + gap) *
        visibleCards;

    track.style.transform = `translateX(-${offset}px)`;

}

/* ==========================================================================
   Indicator State
========================================================================== */

function updateIndicators() {

    const items = indicators.querySelectorAll(".projects__indicator");

    items.forEach((indicator, index) => {

        indicator.classList.toggle(
            "projects__indicator--active",
            index === currentIndex
        );

    });

}

/* ==========================================================================
   Synchronization
========================================================================== */

function synchronizeCarousel() {

    createIndicators();

    updateTrack();

    updateIndicators();

}

/* ==========================================================================
   Navigation
========================================================================== */

function goToPosition(index) {

    currentIndex = index;

    updateTrack();

    updateIndicators();

}

/* ==========================================================================
   Resize
========================================================================== */

function handleResize() {

    const cards = track.querySelectorAll(".project-card");

    const visibleCards = getVisibleCards();

    const totalPositions = Math.ceil(
        cards.length / visibleCards
    );

    if (currentIndex >= totalPositions) {

        currentIndex = totalPositions - 1;

    }

    synchronizeCarousel();

}