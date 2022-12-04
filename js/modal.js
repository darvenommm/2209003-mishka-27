(function() {
  'use strict';

  const modal = document.querySelector('.modal');
  const buttons = document.querySelectorAll('[data-modal="open"]');
  const CLASS_FOR_OPEN = 'modal--open';
  const closeButton = modal.querySelector('[data-modal="close"]');

  // for open
  const openModal = (event) => {
    event.preventDefault();

    modal.classList.add(CLASS_FOR_OPEN);
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  };

  buttons.forEach((button) => {
    button.addEventListener('click', openModal);
  });

  // for close
  const closeModal = () => {
    modal.classList.remove(CLASS_FOR_OPEN);
    document.body.style.overflow = '';
  };

  modal.addEventListener('click', (event) => {
    event.target.matches('.modal') ? closeModal() : null;
  });

  document.addEventListener('keyup', (event) => {
    event.key === 'Escape' ? closeModal() : null;
  });

  closeButton.addEventListener('click', closeModal);
})();
