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
  'Leon',
  'https://www.film.ru/sites/default/files/movies/posters/Leon-9.jpg',
  '.container',
).render();


