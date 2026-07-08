import { initializeNavigation } from "./navigation.js";
import { initializeProjects } from "./projects.js";

/* ==========================================================================
   HTML Loader
========================================================================== */

async function loadHtml(selector, file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Unable to load ${file}`);
        }

        const html = await response.text();

        document.querySelector(selector).innerHTML = html;

    } catch (error) {

        console.error(error);

    }

}

/* ==========================================================================
   Initialization
========================================================================== */

document.addEventListener("DOMContentLoaded", initializeApplication);

async function initializeApplication() {

    await loadHtml(
        "#hero-visual",
        "src/html/hero-visual.html"
    );

    initializeNavigation();
    initializeProjects();

}