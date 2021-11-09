export default class Section {
  constructor(containerSelector, renderer) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems(items) {
    this._renderer(items);
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
