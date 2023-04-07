const authorSection = document.querySelector(".author-section");
const shareSection = document.querySelector(".author-section-active");
const popupSection = document.querySelector(".popup-section");

const shareButton = document.querySelector(".author__share");
const shareButtonActive = document.querySelector(".active-button");

let active = false;

shareButton.addEventListener("click", stateSwitch);
shareButtonActive.addEventListener("click", stateSwitch);

function stateSwitch() {
  if (active) active = false;
  else active = true;
  classChange();
}

function classChange() {
  if (window.innerWidth < 1440) {
    if (active) {
      authorSection.classList.remove("show");
      authorSection.classList.add("hide");
      shareSection.classList.remove("hide");
      shareSection.classList.add("show");
    } else {
      authorSection.classList.remove("hide");
      authorSection.classList.add("show");
      shareSection.classList.remove("show");
      shareSection.classList.add("hide");
    }
  } else {
    if (active) {
      popupSection.style.display = "flex";
    } else {
      popupSection.style.display = "none";
    }
  }
}
