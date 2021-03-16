class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  // Metodo getTemplate
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>
          <slot></slot>
        </h2>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  // Metodo getStyles
  getStyles() {
    return `
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element", myElement);