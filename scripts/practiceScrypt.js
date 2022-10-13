// карточки с фильмами
class card {
  constructor(link, title, image, parentSelector) {
    this.link = link;
    this.title = title;
    this.image = image;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="card ">
    <button class='card__like__btn'>+</button>
    <a href='${this.link}' class="card__item" target="blank">
      <h3 class="card__title search__film">${this.title}</h3>
      <img src="${this.image}" class="card__image"></img>
    </a>
    </div>
    `;
    this.parent.append(element);
  }
}
new card(
  "/TheInformer.html",
  "The Informer",
  "https://www.film.ru/sites/default/files/movies/posters/33019018-1084728.jpg",
  ".content"
).render();

new card(
  "/Leon.html",
  "Leon",
  "https://www.film.ru/sites/default/files/movies/posters/Leon-9.jpg",
  ".content"
).render();

new card(
  "",
  "Whiplash",
  "https://www.film.ru/sites/default/files/movies/posters/3790998-1718031.jpeg",
  ".content"
).render();

new card(
  "",
  "Interstellar",
  "https://www.film.ru/sites/default/files/movies/posters/1703315-663706.jpg",
  ".content"
).render();

new card(
  "",
  "The Pianist",
  "https://www.film.ru/sites/default/files/movies/posters/1610623-621640.jpg",
  ".content"
).render();

new card(
  "",
  "Logan",
  "https://www.film.ru/sites/default/files/movies/posters/6038188-914768.jpg",
  ".content"
).render();

new card(
  "",
  "The Dark Knight",
  "https://www.film.ru/sites/default/files/movies/posters/1626751-1583617.jpeg",
  ".content"
).render();

new card(
  "",
  "Her",
  "https://www.film.ru/sites/default/files/movies/posters/Her-7.jpg",
  ".content"
).render();

new card(
  "",
  "Inception",
  "https://www.film.ru/sites/default/files/movies/posters/1628481-1624630.jpeg",
  ".content"
).render();

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

// подсветка карточек

const cards = document.querySelectorAll(".card"),
  card__image = document.querySelectorAll(".card__image");

cards.forEach((card) => {
  card.addEventListener("mouseenter", function (e) {
    e.target.classList.add("card__active");
  });
});
cards.forEach((card) => {
  card.addEventListener("mouseleave", function (e) {
    e.target.classList.remove("card__active");
  });
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
  ".container"
).render();

new left__poster(
  "",
  "https://www.film.ru/sites/default/files/movies/posters/Pulp-Fiction-3.jpg",
  ".container"
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

// Поиск

const input__text = document.querySelector(".input__text"),
  search__button = document.querySelector(".search__button"),
  searchFilmName = document.querySelectorAll(".search__film");

function searchFunction(input__text) {
  searchFilmName.forEach((e) => {
    if (e.textContent.toLowerCase() == input__text.toLowerCase()) {
      e.style.backgroundColor = "red";
      function clearSearch() {
        e.style.backgroundColor = "";
      }
      setTimeout(clearSearch, 4000);
      e.scrollIntoView();
    }
  });
}

search__button.addEventListener("click", (e) => {
  e.preventDefault();
  searchFunction(input__text.value);
  input__text.value = "";
});

// Сортировка фильмов

const movieDB = document.querySelectorAll(".card__title");
let array = [];
function db() {
  movieDB.forEach(function (title) {
    array.push(title.innerText);
  });
}
db();
console.dir(array);
array.sort();

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


// Второе модальное окно для избранных фильмов

const modal2 = modal.cloneNode(true);
document.body.append(modal2);

const  modal2Open = document.querySelector(".favorite__films"),
  modal2Close = modal2.querySelector(".modal__close"),
  modal2Content = modal2.querySelector('.modal__content');
modal2Content.classList.add('modal2__content');

function openModal2(e) {
  e.preventDefault();
  modal2.classList.add("modal__open");
}
function closeModal2(e) {
  e.preventDefault();
  modal2.classList.remove("modal__open");
}

modal2Open.addEventListener("click", openModal2);
modal2.querySelector('.modal__title').remove();
modal2.querySelectorAll('.modal__text').forEach((e) => {
  e.remove();
})
modal2Close.addEventListener("click", closeModal2);

// Избранные фильмы

const likeFilmBtns = document.querySelectorAll(".card__like__btn");

likeFilmBtns.forEach((likeBtn, i) => {
  likeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("like__active");

    const clon = cards[i].cloneNode(true),
      btn = clon.querySelector("button"),
      active = document.querySelector(".like__active");
    clon.className = 'item__clone';
    if (active) {
      modal2Content.append(clon);
      btn.remove();

      clon.append(createDeleteButton());

      function deleteClone(e) {
        e.preventDefault();
        this.parentNode.remove();
      }

      function createDeleteButton() {
        const deleteItem = document.createElement("input");
        deleteItem.type = "button";
        deleteItem.value = "Delete";
        deleteItem.className = "Delete__btn";
        deleteItem.addEventListener("click", deleteClone);
        return deleteItem;
      }
    }
  });
});


