/* ==========================================================================
   Imports
========================================================================== */

import { projects } from "./project-data.js";

/* ==========================================================================
   Elements
========================================================================== */

let modal;
let title;
let description;
let body;

/* ==========================================================================
   Initialization
========================================================================== */

export function initializeProjectModal() {

    modal = document.getElementById("project-modal");

    if (!modal) {
        return;
    }

    title = modal.querySelector(".project-modal__title");
    description = modal.querySelector(".project-modal__description");
    body = modal.querySelector(".project-modal__body");

    const backdrop = modal.querySelector(".project-modal__backdrop");
    const closeButton = modal.querySelector(".project-modal__close");

    backdrop.addEventListener(
        "click",
        closeProjectModal
    );

    closeButton.addEventListener(
        "click",
        closeProjectModal
    );

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeProjectModal();
        }

    });

}

/* ==========================================================================
   Open
========================================================================== */

export function openProjectModal(projectId) {

    const project = projects.find(
        (item) => item.id === projectId
    );

    if (!project) {
        return;
    }

    title.textContent = project.title;
    description.textContent = project.description;
    body.scrollTop = 0;

    modal.classList.add("project-modal--open");

    document.body.style.overflow = "hidden";

}

/* ==========================================================================
   Close
========================================================================== */

export function closeProjectModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("project-modal--open");

    document.body.style.overflow = "";

}