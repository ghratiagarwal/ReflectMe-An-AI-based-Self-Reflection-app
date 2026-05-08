const node = document.getElementById('selector-node');
const container = document.querySelector('.wheel-container');
let isDragging = false;

// Center of the SVG
const cx = 200;
const cy = 200;
const maxDistance = 160; // Keeps it within the wheel segments

const moveNode = (e) => {
    if (!isDragging) return;

    // Get mouse/touch position relative to SVG
    const rect = container.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    // Convert screen pixels to SVG coordinates (400x400 viewbox)
    const svgX = (x / rect.width) * 400;
    const svgY = (y / rect.height) * 400;

    // Calculate distance from center
    const dx = svgX - cx;
    const dy = svgY - cy;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < maxDistance) {
        node.setAttribute('cx', svgX);
        node.setAttribute('cy', svgY);
    } else {
        // Keep it on the edge if mouse goes too far
        const angle = Math.atan2(dy, dx);
        node.setAttribute('cx', cx + maxDistance * Math.cos(angle));
        node.setAttribute('cy', cy + maxDistance * Math.sin(angle));
    }
};

// Event Listeners
node.addEventListener('mousedown', () => { isDragging = true; node.style.cursor = 'grabbing'; });
window.addEventListener('mouseup', () => { isDragging = false; node.style.cursor = 'grab'; });
window.addEventListener('mousemove', moveNode);

// Mobile Support
node.addEventListener('touchstart', () => { isDragging = true; });
window.addEventListener('touchend', () => { isDragging = false; });
window.addEventListener('touchmove', moveNode);