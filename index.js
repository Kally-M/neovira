document.addEventListener(`DOMContentLoaded`, () => {
    // le FAQs
    document.querySelectorAll(".visible-title").forEach((item) => {
      item.addEventListener("click", () => {
        let content = item.nextElementSibling;
        if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0";
          setTimeout(() => {
            content.style.display = "none";
          }, 300);
        }
  
        let icon = item.querySelector("i");
        icon.classList.toggle("bi-chevron-up");
        icon.classList.toggle("bi-chevron-down");
      });
  
      let content = item.nextElementSibling;
      content.style.display = "none";
      content.style.overflow = "hidden";
      content.style.transition = "max-height 0.3s ease-out";
      content.style.maxHeight = "0";
    });
  
    // les bouttons contacts
  
    const btns = document.querySelectorAll(`.contact`);
    btns.forEach((btn) => {
      btn.addEventListener(`click`, () => {
        window.location.href = `contact.html`;
      });
    });
  
    // les menus burger
    const burgerIcons = document.querySelectorAll(".burger-menu");
    const modals = document.querySelectorAll(".modal");
    const closeModals = document.querySelectorAll(".close");
    if (burgerIcons) {
      burgerIcons.forEach((burgerIcon, index) => {
        burgerIcon.addEventListener("click", () => {
          modals[index].style.display = "flex";
        });
      });
      closeModals.forEach((closeModal, index) => {
        closeModal.addEventListener("click", () => {
          modals[index].style.display = "none";
        });
      });
      modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      });
    }
  });