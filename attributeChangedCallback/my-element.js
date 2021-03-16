class myElement extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes () {
    return ['title', 'pharagraph', 'img']
  }

  attributeChangedCallback (attribute, oldVal, newValue) {
    if (attribute === 'title') {
      this.title = newValue
    }
    if (attribute === 'pharagraph') {
      this.pharagraph = newValue
    }
    if (attribute === 'img') {
      this.img = newValue
    }
  }

  // Metodo getTemplate
  getTemplate () {
    const template = document.createElement('template')
    template.innerHTML = `
      <section>
        <h2>
          ${this.title}
        </h2>
        <div>
          <p>
            ${this.pharagraph}
          </p>
          <img src="${this.img}" />
        </div>
      </section>
      ${this.getStyles()}
    `
    return template
  }
  // Metodo getStyles
  getStyles () {
    return `
      <style>
        h2 {
          color: red;
        }
      </style>
    `
  }
  render () {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback () {
    this.render()
  }
}
customElements.define('my-element', myElement)
