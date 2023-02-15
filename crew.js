// 1: Variables
// HyperLinks
const hyperLinks = document.querySelectorAll(".link");
// buttons
const commanderBtn = document.querySelector(".commander-btn");
const engineerBtn = document.querySelector(".engineer-btn");
const pilotBtn = document.querySelector(".pilot-btn");
const specialistBtn = document.querySelector(".specialist-btn");
const sliderNav = document.querySelectorAll(".crew-slider-btn");
// toggle Menue
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const headerNavBar = document.querySelector(".header-nav-bar");
// Changeable content
const subheading = document.querySelector(".h3-crew-subheading");
const agentName = document.querySelector(".crew-agent-name");
const crewsBodyText = document.querySelector(".crew-body-text");
const crewPrimaryImage = document.querySelector(".crew-primary-img");
const sliderNavData = [
  {
    id: 1,
    subheading: "Commander",
    agentName: "Douglas Hurley",
    crewsBodyText: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
        and former NASA astronaut. He launched into space for the third time as 
        commander of Crew Dragon Demo-2.`,
    crewPrimaryImage: "../../assets/crew/image-douglas-hurley.png",
  },
  {
    id: 2,
    subheading: "Mession specialist",
    agentName: "Mark Shuttleworth",
    crewsBodyText: `Mark Richard Shuttleworth is the founder and CEO of 
        Canonical, the company behind the Linux-based Ubuntu 
        operating system. Shuttleworth became the first South 
         African to travel to space as a space tourist.`,
    crewPrimaryImage: "../../assets/crew/image-Mark-shuttleworth.png",
  },
  {
    id: 3,
    subheading: "Pilot",
    agentName: "Victor Glover",
    crewsBodyText: `Pilot on the first operational flight of the SpaceX Crew
        Dragon to the International Space Station. Glover is a 
        commander in the U.S. Navy where he pilots an F/A-18. He 
        was a crew member of Expedition 64, and served as a 
        station systems flight engineer.`,
    crewPrimaryImage: "../../assets/crew/image-victor-glover.png",
  },
  {
    id: 4,
    subheading: "Flight Engineer",
    agentName: "Anousheh Ansari",
    crewsBodyText: `Anousheh Ansari is an Iranian American engineer and 
        co-founder of Prodea Systems. Ansari was the fourth 
        self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space.`,
    crewPrimaryImage: "../../assets/crew/image-anousheh-ansari.png",
  },
];

// 2: Functionality
// Header navigational bar
window.addEventListener("DOMContentLoaded", () => {
  const locationPathname = window.location.pathname;
  hyperLinks.forEach((item) => {
    if (item.pathname === locationPathname) {
      item.classList.add("active");
    } else if (hyperLinks[2].pathname === locationPathname) {
      commanderBtn.style.backgroundColor = "white";
    }
  });
});

const clearAndSet = function (a) {
  sliderNav.forEach((item) => {
    item.style.backgroundColor = "rgba(89, 89, 89, 0.418)";
  });
  a.style.backgroundColor = "white";
};

sliderNav.forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedElData = sliderNavData.find(
      (item) => item.id == e.target.getAttribute("data-id")
    );
    subheading.innerHTML = selectedElData.subheading;
    agentName.innerHTML = selectedElData.agentName;
    crewsBodyText.innerHTML = selectedElData.crewsBodyText;
    crewPrimaryImage.src = selectedElData.crewPrimaryImage;
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
