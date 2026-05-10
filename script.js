window.onload = () => {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function toggleArtist(card) {
    card.classList.toggle("active");
}

function openArtists() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.classList.add("active");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".about-text");
    const btn = document.getElementById("readMoreBtn");

    if (!section || !btn) return;

    btn.addEventListener("click", () => {
        section.classList.toggle("expanded");

        if (section.classList.contains("expanded")) {
            btn.textContent = "Lees minder";
        } else {
            btn.textContent = "Lees meer";
        }
    });
});