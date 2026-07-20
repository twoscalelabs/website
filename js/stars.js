function populateStarField(elementId, numberOfStars, isBackgroundLayer) {
    const starField = document.getElementById(elementId);
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        let size, opacity;
        if (isBackgroundLayer) {
            size = Math.random() * 2 + 0.5;
            opacity = Math.random() * 0.4 + 0.1;
        } else {
            size = Math.random() * 4 + 1;
            opacity = Math.random() * 0.8 + 0.3;
        }
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity;
        starField.appendChild(star);
    }
}
populateStarField('star-field-slow', 400, true);
populateStarField('star-field', 200, false);