export default class NotificationMessage {
  static element;

  constructor(message = '', {
    duration = 2000,
    type = 'success'
  } = {}) {
    this.message = message;
    this.duration = duration;
    this.type = type;
    this.element = NotificationMessage.element;

    if (this.element) this.destroy();
    this.element = this.createHtmlElement(this.template);
  }

  get template() {
    return `
      <div class="notification ${this.type}" style="--value:${this.duration}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.message}
          </div>
        </div>
      </div>
    `;
  }

  // create static element
  createHtmlElement = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    NotificationMessage.element = div.firstElementChild;

    return NotificationMessage.element;
  };

  show = (wrapper = document.body) => {

    wrapper.append(this.element);

    if (this.type === 'success') {
      this.element.classList.remove('error');
      this.element.classList.add('success');
    }

    if (this.type === 'error') {
      this.element.classList.remove('success');
      this.element.classList.add('error');
    }

    setTimeout(() => {
      this.destroy();
    }, this.duration);
  }

  remove = () => {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy = () => {
    this.remove();
    this.element = null;
  }
}
