export default class Section {
  constructor(containerSelector) {
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => {
      this.addItem(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
