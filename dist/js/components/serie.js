export class Serie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
        this.id = Serie.createId();
        this.isWatched = false;
    }
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
}
