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
  'title',
  'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42842/yellow-square-emoji-clipart-md.png',
  '.container',
).render();

new card(
  'title',
  'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42842/yellow-square-emoji-clipart-md.png',
  '.container',
).render();

new card(
  'title',
  'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42842/yellow-square-emoji-clipart-md.png',
  '.container',
).render();