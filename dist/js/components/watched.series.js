import { SERIES } from '../models/series.content.js';
import { Component } from './component.js';
import { ItemSerie } from './item.serie.js';
export class WatchedSeries extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.watchedSeries = [...SERIES].filter((Serie) => Serie.watched === true);
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        let template = `
        <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched ${this.watchedSeries.length} series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">`;
        this.watchedSeries.forEach((item) => {
            template += new ItemSerie('', item, this.handleErase.bind(this), this.handleChange.bind(this)).template;
        });
        template += `
                
            </ul>
          </section>
        `;
        return template;
    }
    handleErase(eraserId) {
        this.watchedSeries = this.watchedSeries.filter((item) => item.id !== eraserId);
        this.manageComponent();
    }
    handleChange(changeId) {
        const i = this.watchedSeries.findIndex((item) => item.id === changeId);
        this.watchedSeries[i].watched = !this.watchedSeries[i].watched;
        this.manageComponent();
    }
}
