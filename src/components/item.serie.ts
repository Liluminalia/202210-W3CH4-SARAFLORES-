import { Component } from './component.js';
import { Serie } from '../models/serie.js';

export class ItemSerie extends Component {
  template!: string;
  series!: Array<Serie>;
  constructor(public selector: string, public item: Serie) {
    super();

    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render(this.selector, this.template);
    setTimeout(() => {
      (document.querySelector('.icon--delete') as HTMLElement).addEventListener(
        'click',
        () => {
          this.handleErase(this.item.id);
        }
      );
      (
        document.querySelector(`#c${this.item.id}`) as HTMLElement
      ).addEventListener('change', () => {
        this.handleChange(this.item.id);
      });
    }, 100);
  }

  createTemplate() {
    return `
        <li class="serie">
                <img
                  class="serie__poster"
                  src="${this.item.poster}"
                  alt="poster"
                />
                <h4 class="serie__title">${this.item.name}</h4>
                <p class="serie__info">${this.item.creator} (${this.item.year})</p>
                <ul class="score">
                  <li class="score__star" id="c${this.item.id}">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star" id="c${this.item.id}">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star" id="c${this.item.id}">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star" id="c${this.item.id}">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star" id="c${this.item.id}">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete" id="#i${this.item.id}"></i>
              </li>`;
  }
  handleErase(eraserId: number) {
    this.series = this.series.filter((item) => item.id !== eraserId);
    this.manageComponent();
  }
  handleChange(changeID: number) {
    const i = this.series.findIndex((item) => item.id === changeID);
    this.series[i].watched = !this.series[i].watched;
  }
}
