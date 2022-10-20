import { Serie } from '../models/serie.js';
import { SERIES } from '../models/series.content.js';
import { Component } from './component.js';
import { ItemSerie } from './item.serie.js';

export class UnwatchedSeries extends Component {
  template!: string;
  unwatchedSeries: Array<Serie>;
  watched!: boolean;
  constructor(public selector: string) {
    super();
    this.unwatchedSeries = [...SERIES].filter(
      (Serie) => Serie.watched === false
    );

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
            <p class="info">You have ${this.unwatchedSeries.length}  series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">`;

    this.unwatchedSeries.forEach((item: Serie) => {
      template += new ItemSerie('', item).template;
    });
    template += `
                
            </ul>
          </section>
        `;
    return template;
  }
  handleErase(eraserId: number) {
    this.unwatchedSeries = this.unwatchedSeries.filter(
      (item) => item.id !== eraserId
    );
    this.manageComponent();
  }

  handleChange(changeID: number) {
    const i = this.unwatchedSeries.findIndex((item) => item.id === changeID);
    this.unwatchedSeries[i].watched = !this.unwatchedSeries[i].watched;
  }
}
