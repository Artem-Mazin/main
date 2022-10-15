
// открывание/закрывание меню

const clickHamb = document.querySelector(".hamb"),
  menu = document.querySelector(".menu");
clickHamb.addEventListener("click", function () {
  menu.classList.toggle("_active");
});
clickHamb.addEventListener("mouseenter", function () {
  menu.classList.toggle("_active");
});
menu.addEventListener("mouseleave", function () {
  menu.classList.toggle("_active");
});

// левый постер

class left__poster {
  constructor(link, image, parentSelector) {
    this.link = link;
    this.image = image;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="left__poster">
    <a href='${this.link}' class="left__poster__link">
      <img src="${this.image}" class="left__poster__image"></img>
    </a>
    </div>
    `;
    this.parent.prepend(element);
  }
}
new left__poster(
  "",
  "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/ef613c33-08f6-4c7c-890e-3a0f5f71cf1d/orig",
  ".poster__and__timer"
).render();

new left__poster(
  "",
  "https://www.film.ru/sites/default/files/movies/posters/Pulp-Fiction-3.jpg",
  ".poster__and__timer"
).render();

// смена постеров

const posters = document.querySelectorAll(".left__poster");

function hideLeftPosters() {
  posters.forEach((poster) => {
    poster.style.display = "none";
  });
}
function showLeftPoster(i = 0) {
  posters[i].style.display = "block";
}
hideLeftPosters();
showLeftPoster();
let i = 0;
function nextPoster() {
  hideLeftPosters();
  showLeftPoster(i);
  i++;
  if (i >= posters.length) {
    i = 0;
  }
}
let changePoster = setInterval(nextPoster, 10000);

//спрятать постер 

const wrapper = document.querySelector(".wrapper");

function changeWidth() {
  if (window.innerWidth < 1300) {
    clearInterval(changePoster);
    hideLeftPosters();
    wrapper.style.maxWidth = "100%";
  }
}
// window.addEventListener('resize', changeWidth)
changeWidth();

// Спрятать таймер

const timer = document.querySelector('.timer__container');

function hideTimer() {
  timer.style.display = 'none';
}
function hideTimerIf() {
  if (window.innerWidth < 1300) {
    hideTimer();
  }
}
hideTimerIf();

// Модальное окно

const modalOpen = document.querySelector(".contact"),
      modalClose = document.querySelector(".modal__close"),
      modal = document.querySelector(".modal"),
      modalBody = document.querySelector(".modal__body");

function openModal(e) {
  e.preventDefault();
  modal.classList.add("modal__open");
}

function closeModal(e) {
  e.preventDefault();
  modal.classList.remove("modal__open");
  clearTimeout(modalTimer);
}
modalOpen.addEventListener("click", openModal);
modalBody.addEventListener("click", (e) => {
  if (e.target === modalBody) {
    e.preventDefault();
    modal.classList.remove("modal__open");
  }
});
modalClose.addEventListener("click", closeModal);

const modalTimer = setTimeout(function () {
  modal.classList.add("modal__open");
}, 15000);

// Таймер

const endTime = new Date('2023.10.10');

function calculateTime() {
  const startTime = new Date(),
        t = endTime - startTime,
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60);

  const daysContainer = document.querySelector('#days'),
        hoursContainer = document.querySelector('#hours'),
        minutesContainer = document.querySelector('#minutes');

    daysContainer.innerHTML = days;
    hoursContainer.innerHTML = hours;
    minutesContainer.innerHTML = minutes;
}
function finalVersionTime() {
  setInterval(calculateTime, 1000)
}
finalVersionTime();

