function selectPlan(plan) {
    const planTitle = document.querySelector('.plan-title');
    const planDescription = document.querySelector('.plan-description');
    const planPrice = document.querySelector('.plan-price');
    const planSavings = document.querySelector('.plan-savings');

    // Entferne die "is-active"-Klasse von allen Plan-Choice-Elementen
    document.querySelectorAll('.plan-choice').forEach(choice => {
        choice.classList.remove('is-active');
    });

    // Füge die "is-active"-Klasse zum ausgewählten Plan hinzu
    document.querySelector(`.plan-choice[onclick="selectPlan('${plan}')"]`).classList.add('is-active');

    if (plan === 'monthly') {
        planTitle.innerText = 'Monatlich';
        planDescription.innerText = 'Das perfekte Paket, um monatlich zu starten';
        planPrice.innerHTML = 'CHF49<small class="price-unit">/Monat</small>';
        planSavings.innerText = 'Perfekt für den Start';
    } else if (plan === 'yearly') {
        planTitle.innerText = 'Jährlich';
        planDescription.innerText = 'Maximale Vorteile durch ein jährliches Paket';
        planPrice.innerHTML = 'CHF549<small class="price-unit">/Jahr</small>';
        planSavings.innerText = 'Spare CHF 39.- im Jahr ';
    } else if (plan === 'lifetime') {
        planTitle.innerText = 'Lifetime';
        planDescription.innerText = 'Einmal zahlen, lebenslang profitieren';
        planPrice.innerHTML = 'CHF1499<small class="price-unit">/Lifetime</small>';
        planSavings.innerText = 'Zahle einmal und erhalte alle zukünftigen Updates kostenlos';
    }
}
