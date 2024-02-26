const closeBtn = document.querySelector('#close-Btn');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const modal = document.querySelector('.micromodal');

// Hamburger menu logic //

function handleClickCloseModal() {
  modal.classList.toggle('open');
  hamburgerBtn.classList.toggle('closed');
}

function handleClickHamburger(event) {
  const button = event.currentTarget;
  button.classList.toggle('closed');
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
  hamburgerBtn.classList.toggle('closed');
}

closeBtn.addEventListener('click', handleClickCloseModal);
hamburgerBtn.addEventListener('click', handleClickHamburger);

modal.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.micromodal__container');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Tabbing in circle through modal logic //

const modalConteiner = document.querySelector(
  '.micromodal__container'
);
const focusableElements =
  modalConteiner.querySelectorAll('button, [href]');
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

modalConteiner.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    // check if shift key pressed for reverse tabbing
    const isShiftPressed = event.shiftKey;
    if (document.activeElement === firstElement && isShiftPressed) {
      // if focus is on the first element and shift is pressed, focus on the last element
      event.preventDefault();
      lastElement.focus();
    } else if (
      document.activeElement === lastElement &&
      !isShiftPressed
    ) {
      event.preventDefault();
      firstElement.focus();
    }
  }
});
