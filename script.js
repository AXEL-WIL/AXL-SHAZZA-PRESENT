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