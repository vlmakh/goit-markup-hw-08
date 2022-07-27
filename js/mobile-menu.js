(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeMobilBtn: document.querySelector("[data-menu-close]"),
    mobMenu: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeMobilBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.mobMenu.classList.toggle("is-closed");
  }
})();