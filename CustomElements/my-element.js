const template = document.createElement("div");
template.innerHTML = `
  <style>
    .texto {
      color: red;
    }
    p {
      color: blue;
    }
  </style>
  <p class="texto">Hola mundo 2!!</p>
  <p>texto ejemplo para la clase!</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement("p");
  }
  connectedCallback() {
    this.p.textContent = "Hola mundo!!";
    this.appendChild(this.p);
    this.appendChild(template);
  }
}
// Utilizamos define para poder ponerle el nombre a la etiqueta que utilizaremos en HTML "my-element"
customElements.define("my-element", myElement);