let timeIds = [];
function test() {
  let timeId = setTimeout(value_offer_animate, 1000);
  timeIds.push(timeId)
}

function value_offer_animate() {
  var cards = document.querySelectorAll('.card');

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
test();



var item = document.querySelector(".cards-container");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func2, false);

function func() {
  timeIds.forEach((id) => {
    clearTimeout(id);
  });
  var cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.classList.remove("hovered");
  });
}

function func2() {
  test()
}
