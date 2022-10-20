export class Serie {
  id: number;
  isWatched: boolean;

  static createId() {
    return Math.round(Math.random() * 1_000_000);
  }
  constructor(public title: string, public director: string) {
    this.id = Serie.createId();
    this.isWatched = false;
  }
}
