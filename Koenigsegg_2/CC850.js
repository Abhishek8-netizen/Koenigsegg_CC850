let fullGallery = ["Pictures/frontFull.png", "Pictures/interiorFull.png", "Pictures/sideFull.png", "Pictures/transmissionFull.png", "Pictures/rearFull.png", "Pictures/clusterFull.png"];

let halfGallery = ["Pictures/interiorHalf.png", "Pictures/sideHalf.png", "Pictures/transmissionHalf.png", "Pictures/rearHalf.png", "Pictures/clusterHalf.png", "Pictures/frontHalf.png"]

fullImageIndex = 0;
halfImageIndex = 0;

function changeGallery() {

    let fullImage = document.getElementById("fullImage");
    let halfImage = document.getElementById("halfImage");

    fullImageIndex = (fullImageIndex + 1) % fullGallery.length;
    halfImageIndex = (halfImageIndex + 1) % halfGallery.length;

    fullImage.style.opacity = 0;
    halfImage.style.opacity = 0;

    setTimeout(() => {

        fullImage.setAttribute("src", fullGallery[fullImageIndex]);
        halfImage.setAttribute("src", halfGallery[halfImageIndex]);

        fullImage.style.opacity = 1;
        halfImage.style.opacity = 1;

    }, 500)
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}

const cards = document.querySelectorAll('.cardOne');
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.4 });
cards.forEach(card => observer.observe(card));


function showCardText(entries) {
    entries.forEach(entry => {

        if (entry.isIntersecting == true) {
            entry.target.classList.add('textVisible');
        }
    });
}

let cardTextContainer = document.querySelectorAll(".cardOneText");
let textObserver = new IntersectionObserver(showCardText, { threshold: 0.4 });
cardTextContainer.forEach(cardText => textObserver.observe(cardText));



let heading = document.getElementById("modelCelebrationHeading");
let para = document.getElementById("modelCelebrationDesc");

function showModelCelebrationHeading(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            entry.target.classList.add("showModelCelebrationHeading");
        }
    });
}

function showModelCelebrationPara(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            entry.target.classList.add("showModelCelebrationPara");
        }
    });
}

let observerHeading = new IntersectionObserver(showModelCelebrationHeading, { threshold: 0.4 });
let observerPara = new IntersectionObserver(showModelCelebrationPara, { threshold: 0.4 });

observerHeading.observe(heading);
observerPara.observe(para);