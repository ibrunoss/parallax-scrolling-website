const scrollingEffects = () => {
  const header = document.querySelector("#header");
  const title = document.querySelector("#hero .title");
  const bird1 = document.querySelector("#hero .bird1");
  const bird2 = document.querySelector("#hero .bird2");
  const button = document.querySelector("#hero .btn");
  const forest = document.querySelector("#hero .forest");
  const rocks = document.querySelector("#hero .rocks");
  const { scrollY: y } = window;

  header && (header.style.top = y * 0.4 + "px");

  title && (title.style.top = 35 + y * -0.2 + "%");

  if (bird1) {
    bird1.style.top = y * -0.5 + "px";
    bird1.style.left = y * 0.75 + "px";
  }

  if (bird2) {
    bird2.style.top = y * -0.5 + "px";
    bird2.style.left = y * -1 + "px";
  }

  button && (button.style.marginTop = y * 0.5 + "px");

  forest && (forest.style.top = y * 0.3 + "px");

  rocks && (rocks.style.top = y * -0.12 + "px");
};

window.addEventListener("scroll", scrollingEffects);
