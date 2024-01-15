const titles = document.querySelectorAll('.work-item-title');

        const parallax = () => {
            // Gets the scroll position
            const { scrollY } = window;
            // Loops through each title
            titles.forEach(title => {
                // Updates the position of the title with a different speed 
                // To lower and adjust the speed, set it to example 0.01, 0.09, 0.5, 0.55, 0.085,..
                title.style.top = (scrollY * -0.10) + 'px';
            });
        }

        // When scrolled, the parallax function will be called
        window.addEventListener('scroll', () => {
            requestAnimationFrame(parallax);
        });