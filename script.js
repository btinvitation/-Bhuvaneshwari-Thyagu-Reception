/* =====================================
   PREMIUM RECEPTION INVITATION
===================================== */

const loader = document.getElementById("loader");
const website = document.getElementById("website");

const loaderButton = document.querySelector(".loader-button");

const envelope = document.querySelector(".envelope");
const envelopeTop = document.querySelector(".envelope-top");
const waxSeal = document.querySelector(".wax-seal");

const book = document.getElementById("book");
const bookPage = document.querySelector(".book-page");

/* ==========================
   START INVITATION
========================== */

loaderButton.addEventListener("click", () => {

    loader.style.transition = "1s";
    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

        website.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);

});

/* ==========================
   OPEN ENVELOPE
========================== */

envelope.addEventListener("click", () => {

    waxSeal.style.transition = ".5s";
    waxSeal.style.transform = "translateX(-50%) scale(.85)";
    waxSeal.style.boxShadow =
        "0 0 35px rgba(212,175,55,.8)";

    setTimeout(() => {

        envelopeTop.style.transform =
            "rotateX(180deg)";

    }, 300);

    setTimeout(() => {

        document.getElementById("landing")
            .style.display = "none";

        book.style.display = "flex";

    }, 1300);

    setTimeout(() => {

        bookPage.style.display = "block";

    }, 1800);

});

/* ==========================
   MUSIC BUTTON
========================== */

const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {

    alert("Background music will be added in the next version.");

});
