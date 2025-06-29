
const container = document.querySelector('.status-container');
const headline = document.getElementById('headline');

async function getHeadlines() {
  const res = await fetch('headlines.txt');
  const text = await res.text();
  return text.trim().split('\n').filter(Boolean);
}

async function showHeadlines() {
  const headlines = await getHeadlines();
  let i = 0;

  function cycle() {
    headline.textContent = headlines[i];
    container.style.opacity = 1;

    setTimeout(() => {
      container.style.opacity = 0;
      i = (i + 1) % headlines.length;
      setTimeout(cycle, 1000); // wait 1s after fade-out
    }, 9000); // 1s fade-in + 8s hold
  }

  cycle();
}

showHeadlines();
