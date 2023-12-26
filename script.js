document.getElementById('toggleButton').addEventListener('click', function() {
    // Getting the current background color
    var currentColor = document.body.style.backgroundColor;
    console.log(currentColor)

    // Toggling the color
    if (currentColor === 'white') {
        // Change this to your original background color
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.backgroundColor = '';
    }
});