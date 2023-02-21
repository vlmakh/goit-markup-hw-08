const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalBtn.addEventListener("click", openModal);
refs.closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  refs.backdrop.classList.remove("is-hidden");

  window.addEventListener("keydown", onEscKeyPress);
  refs.backdrop.addEventListener("click", onBackDropClick);
}

function closeModal() {
  refs.backdrop.classList.add("is-hidden");
  refs.backdrop.removeEventListener("click", onBackDropClick);
}

function onEscKeyPress(event) {
  if (event.code !== "Escape") {
    return;
  }

  window.removeEventListener("keydown", onEscKeyPress);
  closeModal();
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}
