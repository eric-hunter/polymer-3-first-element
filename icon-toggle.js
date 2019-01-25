import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {

  static get template() {

    return html`
      <style>
        /* shadow DOM styles go here */
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: rgba(0,0,0,0);
          stroke: currentcolor;
        }
        :host([pressed]) iron-icon {
          fill: currentcolor;
        }
      </style>
      <!-- shadow DOM goes here -->
      <iron-icon icon="[[toggleIcon]]"></iron-icon>
    `;
  }

  constructor() {
    //ALWAYS FIRST LINE OF CONSTRUCTOR
    super();
  }

  static get properties() {
    //DEFINE PROPERTIES (that will be used for data binding, see above)
    return {
      toggleIcon: {
        type:String
      }
    };
  }



}

customElements.define('icon-toggle', IconToggle);
