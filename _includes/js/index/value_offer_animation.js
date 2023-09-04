const value_offer = document.querySelector(".cards-container");
const cards = document.querySelectorAll('.card');
let timeIds = [];

cards.forEach((card) => {
  card.addEventListener("mouseover", clear, false);
  card.addEventListener("mouseout", init, false);
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    init();
  } else {
    clear();
  }
});

init();

function init() {
  let timeId = setTimeout(value_offer_animate, 500);
  timeIds.push(timeId)

  function value_offer_animate() {
    cards.forEach((card, index) => {
      let timeId = setTimeout(
        setFlashVersoLoop,
        3000 * index,
        card
      );
      timeIds.push(timeId)
    });


    function setFlashVersoLoop(card) {
      flashVerso(card)
      let timeId = setInterval(flashVerso, 12000, card);
      timeIds.push(timeId)
    }

    function flashVerso(card) {
      toggle_hovered_class(card)
      let timeId = setTimeout(
        toggle_hovered_class,
        3000,
        card
      );
      timeIds.push(timeId)
    }

    function toggle_hovered_class(card) {
      card.classList.toggle("hovered");
    }
  };
}

function clear() {
  timeIds.forEach((id) => {
    clearTimeout(id);
  });
  cards.forEach((card) => {
    card.classList.remove("hovered");
  });
}
