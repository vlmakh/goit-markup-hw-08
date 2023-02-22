(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeMobilBtn: document.querySelector("[data-menu-close]"),
    mobMenu: document.querySelector("[data-menu]"),
    contactsLnk: document.querySelector("[data-contacts]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeMobilBtn.addEventListener("click", toggleModal);
  refs.contactsLnk.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.mobMenu.classList.toggle("is-closed");
  }
})();
