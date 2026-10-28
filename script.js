let currentLanguage = "nl";

/* ARTISTS */
function toggleArtist(card) {
    card.classList.toggle("active");
}

function openArtists() {
    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("active");
    });
}

/* READ MORE */
document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".about-text");
    const btn = document.getElementById("readMoreBtn");

    if (section && btn) {
        btn.addEventListener("click", () => {
            section.classList.toggle("expanded");
            updateReadMoreButton();
        });
    }

    setLanguage(localStorage.getItem("language") || "nl");
});

function updateReadMoreButton() {

    const section = document.querySelector(".about-text");
    const btn = document.getElementById("readMoreBtn");

    if (!section || !btn) return;

    btn.textContent = section.classList.contains("expanded")
        ? translations[currentLanguage].readLess
        : translations[currentLanguage].readMore;
}

/* TRANSLATIONS */
const translations = {

    nl: {
        headerTitle1: "AXL & SHAZZA PRESENT",
        headerTitle2: "THE <u>BILLIE EILISH</u> TRIBUTE",

        eventDate: "Show van 13 OKT 2026 • Kavka Oudaan",

        viewPhotos: "Bekijk alle foto's",

        announcementBar:
            "FOTO'S ONLINE • AANKONDIGING BINNENKORT • BEDANKT VOOR DE AVOND • FOTO'S ONLINE • AANKONDIGING BINNENKORT •",

        aboutTitle: "Onze laatste show",

        aboutText:
            "Op 13 oktober 2026 stonden we in Kavka Oudaan met onze Billie Eilish tribute: een intieme, donkere en tegelijk warme avond met live band en lichtshow. Bedankt aan iedereen die erbij was en er samen met ons één grote ademhaling in het donker van maakte. Een herinnering die blijft hangen.",

        readMore: "Lees meer",
        readLess: "Lees minder",

        quickInfoTitle: "De show in 30 seconden",
        quickInfoSub: "Een korte terugblik op de avond.",
        tributeText: "The Billie Eilish Tribute",

        dateLabel: "Datum",
        dateValue: "13 OKT 2026",
        venueLabel: "Locatie",
        cityLabel: "Stad",
        cityValue: "Antwerpen",
        nextLabel: "Volgende show",
        nextValue: "Binnenkort",

        photosHighlight: "De foto's zijn online",
        photosHighlightSub: "Bekijk de beelden van de avond",

        photosTitle: "Foto's",

        artistsTitle: "Wie zijn wij",

        tagEmotional: "Emotioneel",
        tagAtmospheric: "Atmosferisch",
        tagReflection: "Zelfreflectie",
        tagCommunity: "Verbinding",
        tagPop: "Pop",
        tagVulnerable: "Kwetsbaar",
        tagAuthentic: "Authentiek",

        axlDescription:
            "AXL maakt emotionele, atmosferische muziek waarin persoonlijke groei en innerlijke strijd samenkomen tot een gevoel van verbinding.",

        shazzaDescription:
            "SHAZZA maakt popmuziek en covers die kwetsbaarheid omzetten in herkenbare verhalen.",

        listenTitle: "Luister naar ons",

        soonTitle: "Binnenkort",
        soonHeading: "Er komt een aankondiging aan",
        soonText:
            "We werken aan iets nieuws. Volg ons op TikTok en Instagram zodat je het als eerste weet.",

        footerText:
            "© 2026 AXL & SHAZZA PRESENT • Alle rechten voorbehouden"
    },

    en: {
        headerTitle1: "AXL & SHAZZA PRESENT",
        headerTitle2: "THE <u>BILLIE EILISH</u> TRIBUTE",

        eventDate: "Show of 13 OCT 2026 • Kavka Oudaan",

        viewPhotos: "View all photos",

        announcementBar:
            "PHOTOS ONLINE • ANNOUNCEMENT COMING SOON • THANK YOU FOR THE NIGHT • PHOTOS ONLINE • ANNOUNCEMENT COMING SOON •",

        aboutTitle: "Our last show",

        aboutText:
            "On 13 October 2026 we took the stage at Kavka Oudaan with our Billie Eilish tribute: an intimate, dark yet warm evening with a live band and light show. Thank you to everyone who was there and made it one deep breath in the dark with us. A memory that lingers.",

        readMore: "Read more",
        readLess: "Read less",

        quickInfoTitle: "The show in 30 seconds",
        quickInfoSub: "A quick look back at the night.",
        tributeText: "The Billie Eilish Tribute",

        dateLabel: "Date",
        dateValue: "13 OCT 2026",
        venueLabel: "Venue",
        cityLabel: "City",
        cityValue: "Antwerp",
        nextLabel: "Next show",
        nextValue: "Coming soon",

        photosHighlight: "The photos are online",
        photosHighlightSub: "Relive the night",

        photosTitle: "Photos",

        artistsTitle: "Who are we",

        tagEmotional: "Emotional",
        tagAtmospheric: "Atmospheric",
        tagReflection: "Self Reflection",
        tagCommunity: "Community",
        tagPop: "Pop",
        tagVulnerable: "Vulnerable",
        tagAuthentic: "Authentic",

        axlDescription:
            "AXL creates emotional atmospheric music where personal growth and inner struggle come together as connection.",

        shazzaDescription:
            "SHAZZA creates pop music and covers that transform vulnerability into relatable stories.",

        listenTitle: "Listen to us",

        soonTitle: "Coming soon",
        soonHeading: "An announcement is on its way",
        soonText:
            "We're working on something new. Follow us on TikTok and Instagram to be the first to know.",

        footerText:
            "© 2026 AXL & SHAZZA PRESENT • All rights reserved"
    }
};

/* LANGUAGE SWITCH */
function setLanguage(lang) {

    currentLanguage = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key].replace(/\n/g, "<br>");
        }
    });

    localStorage.setItem("language", lang);

    updateReadMoreButton();

    document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));

    document
        .querySelector(`.lang-btn[onclick="setLanguage('${lang}')"]`)
        .classList.add("active");
}