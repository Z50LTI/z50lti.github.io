function toggleAnswer(faqId) {
    // Alle FAQ-Cards selektieren
    const allFaqItems = document.querySelectorAll('.faq-card');
    let clickedItem = document.getElementById(faqId);

    // Prüfen, ob die aktuell angeklickte Frage bereits aktiv ist
    const isActive = clickedItem.classList.contains('active');
    
    // Alle FAQ-Cards schließen und als 'inactive' markieren
    allFaqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        item.classList.remove('active');
        item.classList.add('inactive'); // Nicht aktive FAQ-Cards werden transparent und kleiner
        answer.style.maxHeight = null; // Verstecke die Antworten
    });

    // Wenn die Frage nicht aktiv war, öffnen wir sie jetzt
    if (!isActive) {
        clickedItem.classList.add('active');
        clickedItem.classList.remove('inactive');
        const answer = clickedItem.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + "px"; // Antwort einblenden
    } else {
        // Wenn die gleiche Frage angeklickt wird, kehrt sie zur Ausgangsposition zurück
        clickedItem.classList.remove('active');
        clickedItem.classList.add('inactive');
        const answer = clickedItem.querySelector('.faq-answer');
        answer.style.maxHeight = null; // Antwort ausblenden
    }
}