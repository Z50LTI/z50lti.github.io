document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".content-01, .content-02, .content-03, .content-04, .content-05, .content-06"
  );
  let currentSectionIndex = 0;
  let isScrolling = false;

  // Funktion zum Ein- und Ausblenden der Abschnitte
  function transitionToSection(index) {
    if (
      index >= 0 &&
      index < sections.length &&
      index !== currentSectionIndex
    ) {
      isScrolling = true;
      const currentSection = sections[currentSectionIndex];
      const nextSection = sections[index];

      // Ausblenden des aktuellen Abschnitts
      currentSection.classList.add("fade-out");
      currentSection.classList.remove("fade-in");

      // Einblenden des nächsten Abschnitts
      nextSection.classList.add("fade-in");
      nextSection.classList.remove("fade-out");

      // Setze den aktuellen Index auf den neuen
      currentSectionIndex = index;

      // Scroll-Indikator ausblenden, wenn der letzte Abschnitt erreicht wird
      toggleScrollIndicator();

      // Timeout, um das Ende des Scrollens abzuwarten
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Dauer der Transition in ms
    }
  }

  // Funktion zum Ein-/Ausblenden des Scroll-Indikators
  function toggleScrollIndicator() {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    if (currentSectionIndex === sections.length - 1) {
      scrollIndicator.style.display = "none"; // Ausblenden, wenn der letzte Abschnitt erreicht ist
    } else {
      scrollIndicator.style.display = "flex"; // Ansonsten einblenden
    }
  }

  // EventListener für das Scrollen
  window.addEventListener("wheel", function (event) {
    if (isScrolling) return;

    if (event.deltaY > 0) {
      // Scroll nach unten
      if (currentSectionIndex < sections.length - 1) {
        transitionToSection(currentSectionIndex + 1);
      }
    } else {
      // Scroll nach oben
      if (currentSectionIndex > 0) {
        transitionToSection(currentSectionIndex - 1);
      }
    }
  });

  // Optional: Scrolle zur richtigen Sektion, wenn der Nutzer auf einen Menülink klickt
  const navLinks = document.querySelectorAll("nav a");

  // Menü schließen, wenn ein Link angeklickt wird
  const navLink = document.querySelector("#nav-links");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      const targetIndex = Array.from(sections).indexOf(
        targetSection.closest("div")
      );
      transitionToSection(targetIndex);

      if (navLink.classList.contains("open")) {
        navLink.classList.remove("open");
      }
    });
  });

  // Initialisierung: Blende den ersten Abschnitt ein
  sections[0].classList.add("fade-in");

  // Scroll-Indikator initial ein-/ausblenden
  toggleScrollIndicator();

  // Scroll-Indikator basierend auf der Scroll-Position kontrollieren
  window.addEventListener("scroll", function () {
    toggleScrollIndicator(); // Aktualisiere den Scroll-Indikator auch beim Scrollen
  });
});
