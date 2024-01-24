class landingPageContent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <h1>Hello, World!</h1>
      `;
    }
  }
  
  customElements.define('landing-page-content-component', landingPageContent);