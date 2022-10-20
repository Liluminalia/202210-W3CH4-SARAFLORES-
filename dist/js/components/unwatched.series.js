import { SERIES } from '../models/series.content.js';
import { Component } from './component.js';
import { ItemSerie } from './item.serie.js';
export class UnwatchedSeries extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.unwatchedSeries = [...SERIES];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        let template = `
        <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">`;
        this.unwatchedSeries.forEach((item) => {
            template += new ItemSerie('', item, this.handleErase.bind(this), this.handleChange.bind(this)).template;
        });
        template += `
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>
            </ul>
          </section>
        `;
        return template;
    }
    handleErase(eraserId) {
        this.unwatchedSeries = this.unwatchedSeries.filter((item) => item.id !== eraserId);
        this.manageComponent();
    }
    handleChange(changeId) {
        const i = this.unwatchedSeries.findIndex((item) => item.id === changeId);
        this.unwatchedSeries[i].watched = !this.unwatchedSeries[i].watched;
        this.manageComponent();
    }
}
