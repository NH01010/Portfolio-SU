document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();

      // ระยะเวลา (ms) ปรับตามชอบ เช่น 800 = 0.8 วินาที
      const duration = 800;
      const targetPos = target.offsetTop - 70; // ลบเผื่อ navbar สูง 70px
      const startPos = window.scrollY;
      const distance = targetPos - startPos;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  });
});

const viewWorkBtn = document.getElementById('viewWorkBtn');

viewWorkBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  if (!target) return;

  const duration = 800;
  const targetPos = target.offsetTop - 70;
  const startPos = window.scrollY;
  const distance = targetPos - startPos;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
});