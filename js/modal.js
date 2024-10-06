(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();

(() => {
  const menu = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openMenuBtn: document.querySelector("[menu-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMenuBtn: document.querySelector("[menu-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[menu-modal]"),
  };

  menu.openMenuBtn.addEventListener("click", toggleModal);
  menu.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    menu.modal.classList.toggle("is-open");
  }
})();