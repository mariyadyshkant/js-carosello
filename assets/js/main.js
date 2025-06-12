// creo un array di obj con le seguenti proprietà:
// - img, titolo, descrizione
const images = [
    {
        image: "01.avif",
        titolo: "Expedition 33",
        descrizione: "La missione spaziale Expedition 33 è stata lanciata nel 2012.",
    },
    {
        image: "02.jpg",
        titolo: "Lies of P",
        descrizione: "Lies of P è un videogioco di ruolo d'azione sviluppato da Neowiz Games.",
    },
    {
        image: "03.webp",
        titolo: "Sekiro",
        descrizione: "Sekiro: Shadows Die Twice è un videogioco d'azione-avventura sviluppato da FromSoftware.",
    },
    {
        image: "04.avif",
        titolo: "Jedi: Survivor",
        descrizione: "Star Wars Jedi: Survivor è un videogioco d'azione-avventura sviluppato da Respawn Entertainment.",
    },
    {
        image: "05.jpeg",
        titolo: "Street Fighter 6",
        descrizione: "Street Fighter 6 è un videogioco di combattimento sviluppato da Capcom.",
    },
];

// seleziono gli elementi del DOM che mi servono
// - prev, next, image, thumbnail, 
const backwardEl = document.querySelector(".backward");
const forwardEl = document.querySelector(".forward");
const imageEl = document.querySelector(".image");
const thumbnailsEl = document.querySelector(".thumbnails");

let activeImage = 0;

// renderizzo l'img principale nel dom
function renderPreviewImage(index) {
    imageEl.innerHTML = `<img class= "img-fluid" src="./assets/img/${images[index].image}" alt="">`;
}
renderPreviewImage(activeImage);


// eventListener per il click su prev e next
backwardEl.addEventListener("click", () => {
    console.log("Cliccato su prev");
    activeImage--;
    renderPreviewImage(activeImage);
});
forwardEl.addEventListener("click", () => {
    console.log("Cliccato su next");
    activeImage++;
    renderPreviewImage(activeImage);
});

// genero il markup delle thumbnail

