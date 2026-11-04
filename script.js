/* =====================================================
   BUKA UNDANGAN
===================================================== */

const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const openInvitation = document.getElementById("openInvitation");

const music = document.getElementById("backgroundMusic");


openInvitation.addEventListener("click", function () {

    opening.classList.add("hide");

    invitation.classList.remove("hidden");

    document.body.style.overflow = "auto";

    // Coba jalankan musik
    music.play().catch(function () {
        console.log("Musik membutuhkan interaksi pengguna.");
    });

    // Scroll ke atas
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =====================================================
   NAVIGASI
===================================================== */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =====================================================
   MUSIK
===================================================== */

let musicPlaying = false;


function toggleMusic() {

    const icon = document.getElementById("musicIcon");

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        icon.innerHTML = "♫";

    } else {

        music.play();

        musicPlaying = true;

        icon.innerHTML = "❚❚";

    }

}


/* =====================================================
   VIDEO 3D
===================================================== */

const weddingVideo =
    document.getElementById("weddingVideo");


if (weddingVideo) {

    weddingVideo.addEventListener(
        "play",
        function () {

            // Kalau video diputar,
            // musik background dihentikan

            music.pause();

        }
    );


    weddingVideo.addEventListener(
        "pause",
        function () {

            // Musik bisa dilanjutkan
            // setelah video berhenti

        }
    );

}


/* =====================================================
   COUNTDOWN
===================================================== */

/*
   GANTI TANGGAL PERNIKAHAN DI SINI

   Format:

   Tahun-Bulan-Tanggal
*/

const weddingDate =
    new Date("2026-11-28T08:00:00+07:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =====================================================
   UCAPAN
===================================================== */

const wishForm =
    document.getElementById("wishForm");

const wishList =
    document.getElementById("wishList");


wishForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("wishName").value;


        const message =
            document.getElementById("wishMessage").value;


        const attendance =
            document.getElementById("attendance").value;


        const wish =
            document.createElement("div");


        wish.className = "wish";


        wish.innerHTML = `

            <strong>
                ${name}
            </strong>

            <p>
                ${message}
            </p>

            <small>
                ${attendance}
            </small>

        `;


        wishList.prepend(wish);


        wishForm.reset();

    }
);


/* =====================================================
   NAMA TAMU DARI LINK
===================================================== */

/*

   Bisa buka seperti:

   index.html?to=Faizul

   Maka otomatis:

   Dear Mr/Mrs/Ms
   Faizul

*/


const params =
    new URLSearchParams(
        window.location.search
    );


const guest =
    params.get("to");


if (guest) {

    document.getElementById(
        "guestName"
    ).innerText = guest;

}