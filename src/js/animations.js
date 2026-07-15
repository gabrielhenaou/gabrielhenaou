/* ==========================================================================
   PCB
========================================================================== */

const tracks = [];
let lastIdleTrack = null;

export function initializePcb() {

    const trackElements = document.querySelectorAll(".track");

    trackElements.forEach(initializeTrack);

    startIdleAnimation();

}

function initializeTrack(track) {

    const signal = track.querySelector(".track__signal");
    const terminal = track.querySelector(".track__terminal");
    const hitbox = track.querySelector(".track__hitbox");

    const length = signal.getTotalLength();

    signal.style.strokeDasharray = length;
    signal.style.strokeDashoffset = length;

    const state = {
        isAnimating: false
    };

    hitbox.addEventListener("mouseenter", () => {

        playTrack(signal, state);

    });

    signal.addEventListener("transitionend", () => {

        animateTerminal(terminal);

        signal.style.transition = "none";
        signal.style.strokeDashoffset = length;

        state.isAnimating = false;

    });

    tracks.push({
        signal,
        state
    });

}

function animateSignal(signal) {

    signal.style.transition = "none";

    signal.style.strokeDashoffset = signal.getTotalLength();

    requestAnimationFrame(() => {

        signal.style.transition =
            "stroke-dashoffset 1200ms ease-out";

        signal.style.strokeDashoffset = 0;

    });

}

function animateTerminal(terminal) {

    terminal.setAttribute("r", "7");
    terminal.style.fillOpacity = "0.75";

    setTimeout(() => {

        terminal.setAttribute("r", "6");
        terminal.style.fillOpacity = "1";

    }, 180);

}

function playTrack(signal, state) {

    if (state.isAnimating) {
        return;
    }

    state.isAnimating = true;

    animateSignal(signal);

}

/* ==========================================================================
   Idle Animation
========================================================================== */

function startIdleAnimation() {

    scheduleNextIdleAnimation();

}

function scheduleNextIdleAnimation() {

    const delay = randomBetween(3000, 7000);

    setTimeout(() => {

        const availableTracks = tracks.filter(track =>
            !track.state.isAnimating &&
            track !== lastIdleTrack
        );

        if (availableTracks.length > 0) {

            const randomTrack =
                availableTracks[Math.floor(Math.random() * availableTracks.length)];

            lastIdleTrack = randomTrack;

            playTrack(
                randomTrack.signal,
                randomTrack.state
            );

        }

        scheduleNextIdleAnimation();

    }, delay);

}

function randomBetween(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}