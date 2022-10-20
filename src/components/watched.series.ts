import { Serie } from '../models/serie.js';
import { SERIES } from '../models/series.content.js';
import { Component } from './component.js';
import { ItemSerie } from './item.serie.js';

export class WatchedSeries extends Component {
  template!: string;
  watchedSeries: Array<Serie>;
  watched!: boolean;
  constructor(public selector: string) {
    super();
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
    this.watchedSeries.forEach((item: Serie) => {
      template += new ItemSerie('', item).template;
    });
    template += `
                
            </ul>
          </section>
        `;
    return template;
  }

  handleErase(eraserId: number) {
    this.watchedSeries = this.watchedSeries.filter(
      (item) => item.id !== eraserId
    );
    this.manageComponent();
  }

  handleChange(changeId: number) {
    const i = this.watchedSeries.findIndex((item) => item.id === changeId);
    this.watchedSeries[i].watched = !this.watchedSeries[i].watched;
    this.manageComponent();
  }
}
