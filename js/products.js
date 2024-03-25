const modal = document.querySelector('.js-modal');
const modalButton1 = document.querySelector('.js-modal-button1');
const modalButton2 = document.querySelector('.js-modal-button2');
const modalButton3 = document.querySelector('.js-modal-button3');
const modalTitle = document.querySelector('.modal__content h3');
const modalClose = document.querySelector('.js-close-button');

modalButton1.addEventListener('click', () => {
  modalTitle.textContent = 'Impulse';
  modal.classList.add('is-open');
});

modalButton2.addEventListener('click', () => {
  modalTitle.textContent = 'OneStep600';
  modal.classList.add('is-open');
});

modalButton3.addEventListener('click', () => {
  modalTitle.textContent = 'Captiva';
  modal.classList.add('is-open');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
});