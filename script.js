// Example JavaScript to add some hover effects
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseover', () => {
        feature.style.boxShadow = '0 0 20px #00d4ff';
    });

    feature.addEventListener('mouseleave', () => {
        feature.style.boxShadow = 'none';
    });
});
