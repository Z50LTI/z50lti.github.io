// Get all the grid items
const gridItems = document.querySelectorAll(".grid-item");

// Create a new intersection observer
const observer = new IntersectionObserver(entries => {
    // Loop through the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the is-visible class
            entry.target.classList.add("is-visible");
            // Unobserve the element
            observer.unobserve(entry.target);
        }
    });
});

// Loop through the grid items
gridItems.forEach(item => {
    // Observe each item
    observer.observe(item);
});