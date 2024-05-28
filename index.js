const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');

showModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
