class AccentTypographyBuild {
  constructor(
      {
        element,
        duration = 500,
        activeClass = `active`,
        wordClass = `accent__word`,
        letterClass = `accent__letter`,
        property = `transform`,
        delay = 0
      }
  ) {
    this._element = element;
    this._duration = duration;
    this._activeClass = activeClass;
    this._letterClass = letterClass;
    this._wordClass = wordClass;
    this._property = property;
    this._delay = delay;

    this.prePareText();
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.classList.add(this._letterClass);
    span.style.transitionDuration = `${this._duration}ms`;
    span.style.transitionProperty = `${this._property}`;
    span.style.transitionTimingFunction = `ease`;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim()
      .split(` `)
      .filter((latter)=> latter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter) => {
        fragment.appendChild(this.createElement(latter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(this._wordClass);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.classList.add(`accent`);
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    setTimeout(() => {
      this._element.classList.add(this._activeClass);
    }, this._delay);
  }

  destroyAnimation() {
    this._element.classList.remove(this._activeClass);
  }
}

export default AccentTypographyBuild;
