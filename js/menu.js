(() => {
  const refs = {
    openModalBtn: document.querySelector("[header-menu-open]"),
    closeModalBtn: document.querySelector("[header-menu-close]"),
    modal: document.querySelector("[header-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-close");
  }
})();