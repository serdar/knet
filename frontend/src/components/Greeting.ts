import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

// @customElement('greeting')
export class Greeting extends LitElement {
    render() {
        return html`<p>hidy</p>`
    }
}
customElements.define('c-greeting', Greeting);