let currentLanguage = "nl";

/* POPUP */
window.onload = () => {
    document.getElementById("popup").style.display = "flex";

    document.querySelector(".language-switcher").classList.add("hidden-on-poster");
    document.querySelector(".floating-artists-btn").classList.add("hidden-on-poster");
};

function closePopup() {
    document.getElementById("popup").style.display = "none";

    document.querySelector(".language-switcher").classList.remove("hidden-on-poster");
    document.querySelector(".floating-artists-btn").classList.remove("hidden-on-poster");
}

/* ARTISTS */
function toggleArtist(card) {
    card.classList.toggle("active");
}

function openArtists() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.classList.add("active");
    });
}


/* READ MORE */
document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".about-text");
    const btn = document.getElementById("readMoreBtn");

    if (!section || !btn) return;

    btn.addEventListener("click", () => {

        section.classList.toggle("expanded");

        updateReadMoreButton();
    });

    const savedLang = localStorage.getItem("language") || "nl";

    setLanguage(savedLang);
});

function updateReadMoreButton() {

    const section = document.querySelector(".about-text");
    const btn = document.getElementById("readMoreBtn");

    if (!section || !btn) return;

    if (section.classList.contains("expanded")) {

        btn.textContent =
            translations[currentLanguage].readLess;

    } else {

        btn.textContent =
            translations[currentLanguage].readMore;
    }
}

/* TRANSLATIONS */
const translations = {

    nl: {

        popupTitle: "AANKOMENDE SHOW",
        buyTicketsPopup: "KOOP TICKETS",

        headerTitle1: "AXL & SHAZZA PRESENT",
        headerTitle2: "THE <u>BILLIE EILISH</u> TRIBUTE",

        eventDate: "13 OKT 2026 • Kavka Oudaan",

        buyTickets: "Koop Tickets",

        announcementBar:
            "TICKETS BESCHIKBAAR • AXL & SHAZZA PRESENT BILLIE EILISH • NIEUWE SHOW • TICKETS BESCHIKBAAR •",

        aboutTitle: "Over het event",

        aboutText:
            "Een avond geïnspireerd door de wereld van Billie Eilish: intiem, donker en tegelijk warm en kwetsbaar. Verwacht een live band, subtiele maar intense lichtshows en een performance die elke emotie versterkt. Samen met een hechte groep fans creëren we een gedeeld moment dat voelt als één grote ademhaling in het donker, een herinnering die blijft hangen.",

        readMore: "Lees meer",
        readLess: "Lees minder",

        quickInfoTitle: "Event in 30 seconden",

        quickInfoSub:
            "Alles wat je moet weten voordat je een ticket koopt.",

        tributeText: "The Billie Eilish Tribute",

        dateLabel: "Datum",
        dateValue: "13 OKT 2026",

        doorsLabel: "Deuren",
        startLabel: "Start",
        endLabel: "Einde",

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

        locationTitle: "Locatie",

        venueTitle: "KAVKA OUDAAN - ANTWERPEN",

        venueAddress: "Oudaan 14, 2000 Antwerpen",

        officialWebsite: "Officiële website",

        faq: "Policies & FAQ",

        transportTitle: "Transport",

        transportText:
            "Dicht bij Antwerpen Centraal\nTram & bus dichtbij",

        parkingTitle: "Parking",

        parkingText:
            "Betaald parkeren in het stadscentrum",

        accessibilityTitle: "Toegankelijkheid",

        accessibilityText:
            "Rolstoeltoegankelijke locatie",

        ticketsTitle: "Tickets",

        generalAdmission: "Algemene toegang",

        fromLabel: "Vanaf",

        ticketNote:
            "Beperkte capaciteit — eenmaal uitverkocht komen er geen extra tickets.",

        refundTitle: "Refund policy",

        refundText:
            "Geen refunds tenzij event geannuleerd wordt",

        entryTitle: "Toegang",

        entryText:
            "Eenmalige QR-ticket scan",

        tipTitle: "Tip",

        tipText:
            "Deuren openen 30 min voor start",

        practicalInfoTitle: "Praktische info",

        insideTitle: "Binnen",

        insideText:
            "Bar aanwezig in de zaal",

        vibeTitle: "Sfeer",

        vibeText:
            "Intieme, emotionele en respectvolle sfeer",

        audienceTitle: "Publiek",

        audienceText:
            "Iedereen is welkom",

        footerText:
            "© 2026 AXL & SHAZZA PRESENT — Alle rechten voorbehouden"
    },

    en: {

        popupTitle: "UPCOMING SHOW",
        buyTicketsPopup: "BUY TICKETS",

        headerTitle1: "AXL & SHAZZA PRESENT",
        headerTitle2: "THE <u>BILLIE EILISH</u> TRIBUTE",

        eventDate: "13 OCT 2026 • Kavka Oudaan",

        buyTickets: "Buy Tickets",

        announcementBar:
            "TICKETS ON SALE • AXL & SHAZZA PRESENT BILLIE EILISH • NEW SHOW • TICKETS ON SALE •",

        aboutTitle: "About the event",

        aboutText:
            "An evening inspired by the world of Billie Eilish: intimate, dark yet warm and vulnerable. Expect a live band, subtle but intense lighting and a performance that amplifies every emotion. Together with a close-knit group of fans we create a shared moment that feels like one deep breath in the dark, a memory that lingers.",

        readMore: "Read more",
        readLess: "Read less",

        quickInfoTitle: "Event in 30 seconds",

        quickInfoSub:
            "Everything you need to know before buying a ticket.",

        tributeText: "The Billie Eilish Tribute",

        dateLabel: "Date",
        dateValue: "13 OCT 2026",

        doorsLabel: "Doors",
        startLabel: "Start",
        endLabel: "End",

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

        locationTitle: "Location",

        venueTitle: "KAVKA OUDAAN - ANTWERP",

        venueAddress: "Oudaan 14, 2000 Antwerp",

        officialWebsite: "Official website",

        faq: "Policies & FAQ",

        transportTitle: "Transport",

        transportText:
            "Near Antwerp Central Station\nTram & bus nearby",

        parkingTitle: "Parking",

        parkingText:
            "Paid parking in the city center",

        accessibilityTitle: "Accessibility",

        accessibilityText:
            "Wheelchair accessible venue",

        ticketsTitle: "Tickets",

        generalAdmission: "General Admission",

        fromLabel: "From",

        ticketNote:
            "Limited capacity — once sold out, no additional tickets will be released.",

        refundTitle: "Refund policy",

        refundText:
            "No refunds unless the event is cancelled",

        entryTitle: "Entry",

        entryText:
            "One-time QR ticket scan",

        tipTitle: "Tip",

        tipText:
            "Doors open 30 min before start",

        practicalInfoTitle: "Practical info",

        insideTitle: "Inside",

        insideText:
            "Bar available inside the venue",

        vibeTitle: "Vibe",

        vibeText:
            "Intimate, emotional and respectful atmosphere",

        audienceTitle: "Audience",

        audienceText:
            "Everyone is welcome",

        footerText:
            "© 2026 AXL & SHAZZA PRESENT — All rights reserved"
    }
};

/* LANGUAGE SWITCH */
function setLanguage(lang) {

    currentLanguage = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[lang][key]) {

            element.innerHTML = translations[lang][key]
                .replace(/\n/g, "<br>");
        }
    });

    localStorage.setItem("language", lang);

    updateReadMoreButton();

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    document
        .querySelector(`.lang-btn[onclick="setLanguage('${lang}')"]`)
        .classList.add("active");
}