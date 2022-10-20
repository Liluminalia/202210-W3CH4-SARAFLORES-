import { Component } from './component.js';
export class AllSeries extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
       <section class="series">
          <h2 class="section-title">Series list</h2>
          
          
        </section>
        `;
    }
}
