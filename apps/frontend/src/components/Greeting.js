import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

// @customElement('greeting')
export class Greeting extends LitElement {
    render() {
        return html`<p>hi</p>`
    }
}
customElements.define('c-greeting', Greeting);