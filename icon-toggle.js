import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {

  //TEMPLATE
  static get template() {

    return html`
      <style>
        /* shadow DOM styles go here */
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }
      </style>
      <!-- shadow DOM goes here -->
      <iron-icon icon="[[toggleIcon]]"></iron-icon>
    `;
  }

  //PROPERTIES
  static get properties() {
    //DEFINE PROPERTIES (that will be used for data binding, see above)
    return {
      toggleIcon: {
        type: String
      },
      pressed: {
        type: Boolean,
        value: false,
        //allows property to be observable
        notify: true,
        //changes value of html attribute to whatever property changed to.
        reflectToAttribute: true
      }
    };
  }

  constructor() {
    //ALWAYS FIRST LINE OF CONSTRUCTOR
    super();
    //ADD EVENT LISTENER
    this.addEventListener('click', this.toggle.bind(this));
  }

  //CLICK CALLBACK
  toggle() {
    this.pressed = !this.pressed;
  }

}

customElements.define('icon-toggle', IconToggle);
