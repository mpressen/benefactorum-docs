const value_offer = document.querySelector(".cards-container");
const cards = document.querySelectorAll('.card');
let timeIds = [];

value_offer.addEventListener("mouseover", clear, false);
value_offer.addEventListener("mouseout", init, false);
init();


function init() {
  let timeId = setTimeout(value_offer_animate, 1000);
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
