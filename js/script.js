window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Scrollen während des Ladevorgangs deaktivieren
  document.body.style.overflow = "hidden";

  // Simuliere den Ladeprozess
  setTimeout(() => {
    loader.style.transition = "opacity 1s ease";
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";

      // Scrollen wieder aktivieren, wenn der Loader ausgeblendet ist
      document.body.style.overflow = "auto";
    }, 1000);

    // Zuerst Navbar und Hero-Content sichtbar machen
    const elementsToRevealFirst = document.querySelectorAll(
      ".navbar, .hero-content"
    );
    elementsToRevealFirst.forEach((element) => {
      element.style.visibility = "visible";
      element.style.opacity = "1";
      element.style.transform = "translateX(0)"; // Zielzustand nach der Animation
    });

    // Hero-Image später sichtbar machen
    setTimeout(() => {
      const heroImage = document.querySelector(".hero-image img");
      heroImage.style.visibility = "visible";
      heroImage.style.opacity = "1";
      heroImage.style.transform = "translateX(0)"; // Zielzustand nach der Animation
    }, 500); // Verzögerung für das Bild um 500ms

    // Typing animation for the hero text
    const text = "Dein Weg zum Trader!";
    const typedTextElement = document.getElementById("typed-text");
    let index = 0;

    function typeLetter() {
      if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, 100); // Geschwindigkeit des Tippens
      } else {
        // Sobald der Text vollständig getippt wurde, p-Element anzeigen
        const pElement = document.querySelector(".hero-text p");
        const heroButton = document.querySelector(".hero-buttons .cta-button"); // Selektor angepasst

        pElement.style.visibility = "visible";
        pElement.style.opacity = "1";
        pElement.style.transform = "translateY(0)"; // Zielzustand nach der Animation

        // Hero-Button nach einer kurzen Verzögerung anzeigen
        setTimeout(() => {
          heroButton.style.visibility = "visible";
          heroButton.style.opacity = "1";
          heroButton.style.transform = "translateY(0)"; // Zielzustand nach der Animation
        }, 500); // Verzögerung von 500ms für den Button
      }
    }

    typeLetter(); // Start der Tipp-Animation
  }, 3000); // Ladeprozess nach 3 Sekunden abschließen
});
document.getElementById("burger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("open");
});
