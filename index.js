document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.typewriter');
    elements.forEach((element, index) => {
        setTimeout(() => {
            typeEffect(element);
        }, index * 1000); // Adjust the delay as needed
    });
});

function typeEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 50); // Adjust typing speed here
}
