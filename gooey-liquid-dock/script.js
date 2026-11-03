const buttons = [...document.querySelectorAll(".dock button")];
buttons.forEach((b, i) =>
  b.addEventListener("click", () => {
    buttons.forEach((x, j) => {
      x.classList.toggle("active", i === j);
      x.setAttribute("aria-pressed", String(i === j));
    });
    document.querySelector(".bubble").style.left =
      `calc(100% / 5 * ${i} + (100% / 5 - 56px) / 2)`;
  }),
);
