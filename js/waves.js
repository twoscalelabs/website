// One-time DOM setup — NOT a requestAnimationFrame loop. Each box's vertical
// motion is handled entirely by the CSS `wave-time` animation on the --t custom
// property, combined with the `transform: translateY(... cos(--t) ...)` rule
// in the stylesheet above. This just plots the boxes and bakes in each box's
// sine amplitude (--amp) based on its horizontal position.
function buildWave(containerId, numBoxes, cycles, colorClass) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < numBoxes; i++) {
        const t = i / (numBoxes - 1); // 0 -> 1 across the width
        const amp = Math.sin(2 * Math.PI * cycles * t); // -1 .. 1

        const box = document.createElement('div');
        box.className = 'wave-box ' + colorClass;
        box.style.left = (t * 100) + '%';
        box.style.setProperty('--amp', amp.toFixed(4));
        container.appendChild(box);
    }
}

// Member 1: 8 cycles across the width
buildWave('wave1', 34, 8, 'wave-box--primary');
// Member 2: 4 cycles across the width
buildWave('wave2', 34, 4, 'wave-box--secondary');