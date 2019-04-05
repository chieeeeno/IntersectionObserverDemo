document.addEventListener('DOMContentLoaded', () => {
  const moviePlayer = document.getElementById('video1');
  const playButton = document.querySelector('.playButton');
  const pauseButton = document.querySelector('.pauseButton');

  const options = {
    root: null,
    rootMargin: '-250px',
    // threshold: [0.5],
  };

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        console.log('play!!');
        entry.target.play();
      } else {
        console.log('pause!!');
        entry.target.pause();
      }
    }
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
