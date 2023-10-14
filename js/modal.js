document
  .getElementById('modal-open-btn')
  .addEventListener('click', function () {
    document.getElementById('modal-order').classList.add('is-open');
  });
document
  .getElementById('modal-close-btn')
  .addEventListener('click', function () {
    document.getElementById('modal-order').classList.remove('is-open');
  });
