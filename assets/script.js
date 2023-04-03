const handleMouseEnter = function() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

const handleMouseLeave = function() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

const addEventListenersToCards = () => {
  const cardElements = document.querySelectorAll('.s-card');

  cardElements.forEach(card => {
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  });
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards);

const selectCarouselItem = selectedButtonElement => {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}
