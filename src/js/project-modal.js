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

    const backdrop = modal.querySelector(".project-modal__backdrop");
    const closeButton = modal.querySelector(".project-modal__close");

    backdrop.addEventListener("click", closeProjectModal);

    closeButton.addEventListener("click", closeProjectModal);

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

    console.log("openProjectModal:", projectId);

    const project = projects.find(
        (item) => item.id === projectId
    );

    console.log("Project:", project);
    console.log("Modal:", modal);
    console.log("Title:", title);
    console.log("Description:", description);

    if (!project) {
        return;
    }

    title.textContent = project.title;

    description.textContent = project.description;

    modal.classList.add("project-modal--open");

    console.log("Classes:", modal.className);

    document.body.style.overflow = "hidden";

}

/* ==========================================================================
   Close
========================================================================== */

export function closeProjectModal() {

    modal.classList.remove("project-modal--open");

    document.body.style.overflow = "";

}