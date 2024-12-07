const button = document.getElementById('get-message');
const responseDiv = document.getElementById('response');

button.addEventListener('click', () => {
    fetch('http://localhost:3000/api/message')
        .then(response => response.json())
        .then(data => {
            responseDiv.innerHTML = `Pesan dari server: ${data.message}`;
        })
        .catch(error => console.error('Error:', error));
});
