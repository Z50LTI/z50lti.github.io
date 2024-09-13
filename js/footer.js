document.addEventListener('DOMContentLoaded', function() {
    // Über uns Sektion
    const ueberUnsSection = document.querySelector('#ueber-uns');
    const footer = document.querySelector('#ueber-uns-footer');

    // EventListener für Scroll
    window.addEventListener('scroll', function() {
        // Position der "Über uns" Sektion ermitteln
        const sectionPosition = ueberUnsSection.getBoundingClientRect();

        // Prüfen, ob die "Über uns" Sektion im Sichtfeld ist
        if (sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0) {
            footer.style.display = 'block';  // Footer einblenden
        } else {
            footer.style.display = 'none';  // Footer ausblenden
        }
    });
});
