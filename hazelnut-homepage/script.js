const hamburgerBtn = document.querySelector('.hamburger-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');

function openModal() {
  modal.classList.toggle('open');
}

function closeModal() {
  modal.classList.toggle('open');
}

hamburgerBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Closing modal when clicked outside the modal
modalOverlay.addEventListener('click', function (event) {
  const isOutside = event.target.closest('.modal-container');
  if (!isOutside) {
    closeModal();
  }
});

// Closing modal when Escape key pressed
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Tabbing inside the modal
const modalContainer = document.querySelector('.modal-container');

const focusableElements =
  modalContainer.querySelectorAll('button, [href]');
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

modalContainer.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    // Check if shift key pressed for reverse tabbing
    const isShiftPressed = event.shiftKey;
    if (document.activeElement === firstElement && isShiftPressed) {
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
