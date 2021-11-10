export class Apod {
    constructor(data) {
        this.title = data.title
        this.date = data.date
        this.description = data.explanation
        this.imgUrl = data.hdurl
    }
}