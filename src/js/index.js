document.addEventListener('DOMContentLoaded', () => {
  const moviePlayer = document.getElementById('video1');
  const options = {
    root: null,
    rootMargin: '-15%',
    // threshold: [0.5],
  };

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        console.log('play!!');
        // entry.target.play();
      } else {
        console.log('pause!!');
        entry.target.pause();
      }
    }
  }, options);
  observer.observe(moviePlayer);
});
