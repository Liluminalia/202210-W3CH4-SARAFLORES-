import { Component } from './component.js';

export class Main extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
  }
  createTemplate() {
    return `
    <div class="container">
        <main class="main">
        
        </main>
        </div>
        `;
  }
}
