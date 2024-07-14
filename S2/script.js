document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.btn');
    const audio = document.getElementById('gravacao');

    button.addEventListener('click', function() {
        audio.play();
    });
});