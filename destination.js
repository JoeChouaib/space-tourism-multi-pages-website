// 1: Variables
// HyperLinks
const hyperLinks = document.querySelectorAll(".link");
// Buttons
const moonBtn = document.querySelector(".moon-btn");
const marsBtn = document.querySelector(".mars-btn");
const europaBtn = document.querySelector(".europa-btn");
const titanBtn = document.querySelector(".titan-btn");
const secondaryNavBar = document.querySelectorAll(".secondary-btn-nav");
// toggle Menue
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const headerNavBar = document.querySelector(".header-nav-bar");
// Changeable content
const primaryHeading = document.querySelector(".moon-primary-heading");
const bodyText = document.querySelector("#moon-body-text");
const primaryDestinationImg = document.querySelector(
  ".primary-destination-img"
);
const distanceSubHeading = document.querySelector(".distance-nd-subheading");
const timingSubHeading = document.querySelector(".timing-nd-subheading");
const secondaryNavBarData = [
  {
    id: 1,
    primaryHeading: "Moon",
    paragraphText: `See our planet as you've never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you're there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.`,
    imgSrc: "../../assets/destination/image-moon.png",
    distanceSubHeading: "384,400 km",
    timingSubHeading: "9 Months",
  },
  {
    id: 2,
    primaryHeading: "Mars",
    paragraphText: `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, 
        the tallest planetary mountain in our solar system. It's two and a half times 
        the size of Everest!`,
    imgSrc: "../../assets/destination/image-mars.png",
    distanceSubHeading: "225 mil. km",
    timingSubHeading: "9 Months",
  },
  {
    id: 3,
    primaryHeading: "Europa",
    paragraphText: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
        winter lover's dream. With an icy surface, it's perfect for a bit of 
        ice skating, curling, hockey, or simple relaxation in your snug 
        wintery cabin.`,
    imgSrc: "../../assets/destination/image-europa.png",
    distanceSubHeading: "628 mil. km",
    timingSubHeading: "3 Years",
  },
  {
    id: 4,
    primaryHeading: "Titan",
    paragraphText: `The only moon known to have a dense atmosphere other than Earth, Titan 
        is a home away from home (just a few hundred degrees colder!). As a 
        bonus, you get striking views of the Rings of Saturn.`,
    imgSrc: "../../assets/destination/image-titan.png",
    distanceSubHeading: "1.6 bil. km",
    timingSubHeading: "7 Years",
  },
];
// 2: Functionality
// Header navigational bar
window.addEventListener("DOMContentLoaded", () => {
  const locationPathname = window.location.pathname;
  hyperLinks.forEach((item) => {
    if (item.pathname === locationPathname) {
      item.classList.add("active");
    } else if (hyperLinks[1].pathname === locationPathname) {
      moonBtn.classList.add("active");
    }
  });
});
// Secondary nav rectangle active
const clearAndSet = function (a) {
  secondaryNavBar.forEach((item) => {
    item.classList.remove("active");
  });
  a.classList.add("active");
};
// Changing content
secondaryNavBar.forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedElmData = secondaryNavBarData.find(
      (item) => item.id == e.target.getAttribute("data-id")
    );
    primaryHeading.innerHTML = selectedElmData.primaryHeading;
    bodyText.innerHTML = selectedElmData.paragraphText;
    primaryDestinationImg.src = selectedElmData.imgSrc;
    distanceSubHeading.innerHTML = selectedElmData.distanceSubHeading;
    timingSubHeading.innerHTML = selectedElmData.timingSubHeading;
    clearAndSet(item);
  });
});
AOS.init();
openIcon.addEventListener("click", () => {
  headerNavBar.style.display = "block";
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  headerNavBar.style.display = "none";
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
});
