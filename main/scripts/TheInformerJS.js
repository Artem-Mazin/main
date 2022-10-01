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
    <a href='${this.link}' class="card__item">
      <h3 class="card__title">${this.title}</h3>
      <img src="${this.image}" class="card__image"></img>
    </a>
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

