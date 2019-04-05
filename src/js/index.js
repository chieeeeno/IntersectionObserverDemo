document.addEventListener('DOMContentLoaded', () => {
  const moviePlayer = document.getElementById('video1');
  const playButton = document.querySelector('.playButton');
  const pauseButton = document.querySelector('.pauseButton');

  const options = {
    root: null,
    rootMargin: 0,
    threshold: [0.25, 0.5],
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry);
    });
  }, options);
  observer.observe(moviePlayer);

  playButton.addEventListener('click', event => {
    event.preventDefault();
    moviePlayer.play();
  });

  pauseButton.addEventListener('click', event => {
    event.preventDefault();
    moviePlayer.pause();
  });
});
