const uploadForm = document.getElementById('uploadForm');
const resultDiv = document.getElementById('result');

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const imageFile = document.getElementById('imageFile').files[0];
    if (!imageFile) {
        alert('Pilih gambar terlebih dahulu!');
        return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        if (response.ok) {
            resultDiv.innerHTML = `<p>Upload berhasil!</p><img src="${result.imageUrl}" alt="Uploaded Image" style="max-width: 300px;">`;
        } else {
            resultDiv.innerHTML = `<p>Error: ${result.error}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Error saat mengunggah gambar.</p>`;
        console.error(error);
    }
});
