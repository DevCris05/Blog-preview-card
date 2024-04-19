const title = document.querySelector(".title-card");
const card = document.querySelector(".card");

title.addEventListener("mouseover", () => {
  card.style.boxShadow = "15px 15px 1px 3px var(--color-tilte)";
});

title.addEventListener("mouseout", () => {
  card.style.boxShadow = "10px 10px 1px 1px var(--color-tilte)";
});
