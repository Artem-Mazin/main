class card {
  constructor(link, title, image, parentSelector) {
    this.link = link;
    this.title = title;
    this.image = image;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement('div');
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
  '/main/TheInformer.html',
  'The Informer',
  'https://www.film.ru/sites/default/files/movies/posters/33019018-1084728.jpg',
  '.container',
).render();

new card(
  '/main/Leon.html',
  'Leon',
  'https://www.film.ru/sites/default/files/movies/posters/Leon-9.jpg',
  '.container',
).render();

new card(
  '',
  'Whiplash',
  'https://www.film.ru/sites/default/files/movies/posters/3790998-1718031.jpeg',
  '.container',
).render();

new card(
  '',
  'Interstellar',
  'https://www.film.ru/sites/default/files/movies/posters/1703315-663706.jpg',
  '.container',
).render();

new card(
  '',
  'The Pianist',
  'https://www.film.ru/sites/default/files/movies/posters/1610623-621640.jpg',
  '.container',
).render();

