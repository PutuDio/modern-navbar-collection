const buttons = [...document.querySelectorAll("[data-page]")],
  palette = document.querySelector(".palette"),
  input = palette.querySelector("input"),
  list = document.querySelector(".palette-list");
let previous = null;
function close() {
  palette.classList.remove("show");
  previous?.focus();
}
function select(l) {
  document.querySelector("#active").textContent = l;
  buttons.forEach((b) => {
    b.classList.toggle("active", b.dataset.page === l);
    b.setAttribute("aria-pressed", String(b.dataset.page === l));
  });
  if (palette.classList.contains("show")) close();
}
function render() {
  list.replaceChildren();
  buttons
    .filter((b) =>
      b.dataset.page.toLowerCase().includes(input.value.toLowerCase()),
    )
    .forEach((b) => {
      const x = document.createElement("button");
      x.textContent = b.dataset.page;
      x.addEventListener("click", () => select(b.dataset.page));
      list.append(x);
    });
  if (!list.children.length) {
    const p = document.createElement("p");
    p.textContent = "Tidak ada hasil";
    list.append(p);
  }
}
function show() {
  previous = document.activeElement;
  palette.classList.add("show");
  input.value = "";
  render();
  input.focus();
}
buttons.forEach((b, i) => {
  b.addEventListener("click", () => select(b.dataset.page));
  b.addEventListener("pointerenter", () =>
    buttons.forEach((x, j) =>
      x.classList.toggle("near", Math.abs(i - j) === 1),
    ),
  );
  b.addEventListener("pointerleave", () =>
    buttons.forEach((x) => x.classList.remove("near")),
  );
});
document.querySelector(".command").addEventListener("click", show);
palette.querySelector("header button").addEventListener("click", close);
input.addEventListener("input", render);
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    show();
  }
  if (e.key === "Escape") close();
  if (
    palette.classList.contains("show") &&
    e.key === "Enter" &&
    document.activeElement === input
  )
    list.querySelector("button")?.click();
  if (palette.classList.contains("show") && e.key === "Tab") {
    const f = [...palette.querySelectorAll("button,input")];
    if (e.shiftKey && document.activeElement === f[0]) {
      e.preventDefault();
      f.at(-1)?.focus();
    } else if (!e.shiftKey && document.activeElement === f.at(-1)) {
      e.preventDefault();
      f[0]?.focus();
    }
  }
});
