export class Movie {
  constructor(id) {
    this.movieElement = document.getElementById(id);
  }
  play() {
    this.movieElement.play();
  }
  pause() {
    this.movieElement.pause();
  }
}
