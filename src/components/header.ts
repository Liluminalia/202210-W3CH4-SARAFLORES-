import { Component } from './component.js';

export class Header extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
  }
  createTemplate() {
    return `
        <header class="main-header">
          <h1 class="main-title">My Series</h1>
        </header>`;
  }
}
