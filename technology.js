// 1: Variables
// HyperLinks
const hyperLinks = document.querySelectorAll(".link");
// Technologies buttons
const vehicleBtn = document.querySelector(".vehicle-btn");
const spaceportBtn = document.querySelector(".spaceport-btn");
const capsuleBtn = document.querySelector(".capsule-btn");
const techSlider = document.querySelectorAll(".tech-btn-nav");
// toggle Menue
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const headerNavBar = document.querySelector(".header-nav-bar");
// changeable content
const primaryheading = document.querySelector(".techs-primary-heading");
const techBodyText = document.querySelector(".techs-body-text");
const techPrimaryImg = document.querySelector(".changed-img");
const techSliderData = [
  {
    id: 1,
    primaryheading: "Launch vehicle",
    techBodyText: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
        it's quite an awe-inspiring sight on the launch pad!`,
    techPrimaryImg: "../../assets/technology/image-launch-vehicle-portrait.jpg",
  },
  {
    id: 2,
    primaryheading: "Spaceport",
    techBodyText: `A spaceport or cosmodrome is a site for launching (or
            receiving) spacecraft, by analogy to the seaport for ships 
            or airport for aircraft. Based in the famous Cape 
            Canaveral, our spaceport is ideally situated to take 
            advantage of the Earth's rotation for launch.`,
    techPrimaryImg: "../../assets/technology/image-spaceport-portrait.jpg",
  },
  {
    id: 3,
    primaryheading: "Space Capsule",
    techBodyText: `A space capsule is an often-crewed spacecraft that uses 
        a blunt-body reentry capsule to reenter the Earth's 
        atmosphere without wings. Our capsule is where you'll 
        spend your time during the flight. It includes a space 
        gym, cinema, and plenty of other activities to keep you 
        entertained.`,
    techPrimaryImg: "../../assets/technology/image-space-capsule-portrait.jpg",
  },
];
// 2: Functionality
// Header navigational bar
window.addEventListener("DOMContentLoaded", () => {
  const locationPathname = window.location.pathname;
  hyperLinks.forEach((item) => {
    if (item.pathname === locationPathname) {
      item.classList.add("active");
    } else if (hyperLinks[3].pathname === locationPathname) {
      vehicleBtn.classList.add("activetech");
    }
  });
});

const clearAndSet = function (a) {
  techSlider.forEach((item) => {
    item.classList.remove("activetech");
  });
  a.classList.add("activetech");
};

techSlider.forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedElData = techSliderData.find(
      (item) => item.id == e.target.getAttribute("data-id")
    );
    primaryheading.innerHTML = selectedElData.primaryheading;
    techBodyText.innerHTML = selectedElData.techBodyText;
    techPrimaryImg.src = selectedElData.techPrimaryImg;
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
