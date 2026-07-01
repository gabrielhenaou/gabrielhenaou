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

document.addEventListener("DOMContentLoaded", () => {

    loadHtml(
        "#hero-visual",
        "src/html/hero-visual.html"
    );

});