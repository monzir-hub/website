// Toggle project details visibility
const projectCards = document.querySelectorAll("[data-project]");

projectCards.forEach((card) => {
  const toggleButton = card.querySelector(".toggle");
  const body = card.querySelector(".project-card__body");

  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!isExpanded));
    body.hidden = isExpanded;
    toggleButton.textContent = isExpanded ? "Details" : "Hide";
  });
});

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
