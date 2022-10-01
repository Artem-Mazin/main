class card {
  constructor(title, image, parentSelector) {
    this.title = title;
    this.image = image;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="card">
    <div class="card__item">
      <h3 class="card__title">${this.title}</h3>
      <img src="${this.image}" class="card__image"></img>
    </div>
    </div>
    `;
    this.parent.append(element);
  }
}
new card(
  'The Informer',
  'https://www.film.ru/sites/default/files/movies/posters/33019018-1084728.jpg',
  '.container',
).render();

new card(
  'Leon',
  'https://www.film.ru/sites/default/files/movies/posters/Leon-9.jpg',
  '.container',
).render();

new card(
  'Whiplash',
  'https://www.film.ru/sites/default/files/movies/posters/3790998-1718031.jpeg',
  '.container',
).render();