/* =====================================
   PREMIUM RECEPTION INVITATION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const website = document.getElementById("website");

    const loaderButton = document.querySelector(".loader-button");

    const landing = document.getElementById("landing");
    const envelope = document.querySelector(".envelope");
    const envelopeTop = document.querySelector(".envelope-top");
    const waxSeal = document.querySelector(".wax-seal");

    // Hide website initially
    if (website) {
        website.style.display = "none";
    }

    /* ==========================
       START INVITATION
    ========================== */

    if (loaderButton) {

        loaderButton.addEventListener("click", () => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

                if (landing) {
                    landing.style.display = "flex";
                }

                if (website) {
                    website.style.display = "block";
                }

            }, 800);

        });

    }

    /* ==========================
       OPEN ENVELOPE
    ========================== */

    if (envelope) {

        envelope.addEventListener("click", () => {

            if (waxSeal) {
                waxSeal.style.transform =
                    "translateX(-50%) scale(.85)";
            }

            if (envelopeTop) {
                envelopeTop.style.transform =
                    "rotateX(180deg)";
            }

            setTimeout(() => {

                if (landing) {
                    landing.style.display = "none";
                }

                const firstPhoto =
                    document.querySelector(".photo-section");

                if (firstPhoto) {

                    firstPhoto.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 1000);

        });

    }

    /* ==========================
       SCROLL ANIMATION
    ========================== */

    if (typeof gsap !== "undefined") {

        gsap.utils.toArray("section").forEach((section) => {

            gsap.from(section, {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: typeof ScrollTrigger !== "undefined" ? {
                    trigger: section,
                    start: "top 85%"
                } : undefined
            });

        });

    }

    /* ==========================
       MUSIC BUTTON
    ========================== */

    const musicBtn = document.getElementById("music-btn");

    if (musicBtn) {

        musicBtn.addEventListener("click", () => {

            alert("🎵 Background music will be added soon.");
/* ==========================
   AUTO HIDE ENVELOPE
========================== */

const openingEnvelope = document.getElementById("envelope");

if (openingEnvelope) {

    setTimeout(() => {

        openingEnvelope.style.display = "none";

    }, 4000);

}
        });

    }
/* ==========================
   GOLD PARTICLES
========================== */

function createGoldParticle(){

    const particle =
    document.createElement("div");

    particle.className =
    "gold-particle";

    particle.innerHTML="✦";

    particle.style.left =
    Math.random()*100+"vw";

    particle.style.animationDuration =
    (Math.random()*5+5)+"s";


    document.body.appendChild(particle);


    setTimeout(()=>{

        particle.remove();

    },10000);

}


setInterval(createGoldParticle,700);
});
