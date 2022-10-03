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
    <div class="card">
    <a href='${this.link}' class="card__item" target="blank">
      <h3 class="card__title">${this.title}</h3>
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

// открывание/закрывание меню
const clickHamb = document.querySelector(".hamb");
const menu = document.querySelector(".menu");
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
const cards = document.querySelector(".card");
const card__image = document.querySelector(".card__image");
cards.addEventListener("mouseenter", function () {
  card__image.style.height = "21em";
});
cards.addEventListener("mouseleave", function () {
  card__image.style.height = "";
});
