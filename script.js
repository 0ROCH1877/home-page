function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = 's-body--hovered';
  }
  
  function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.removeAttribute('id');
  }
  
  function addEventListenersToCards() {
    const cardElements = document.querySelectorAll('.s-card');
  
    for (let index = 0; index < cardElements.length; index++) {
      const card = cardElements[index];
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
  }
  
  document.addEventListener('DOMContentLoaded', addEventListenersToCards);
  