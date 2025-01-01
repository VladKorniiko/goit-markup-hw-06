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

document.getElementById('mob-menu-btn').addEventListener('click', function () {
  document.getElementById('mob-menu').classList.add('is-open');
});
document
  .getElementById('mob-menu-close')
  .addEventListener('click', function () {
    document.getElementById('mob-menu').classList.remove('is-open');
  });
