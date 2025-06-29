fetch("data/headlines.json")
  .then((res) => res.json())
  .then((headlines) => {
    let index = 0;
    const el = document.getElementById("headline");
    function cycle() {
      el.style.animation = "none";
      void el.offsetWidth;
      el.textContent = headlines[index];
      el.style.animation = null;
      index = (index + 1) % headlines.length;
    }
    cycle();
    setInterval(cycle, 10000);
  });