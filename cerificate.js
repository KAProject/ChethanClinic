function openFullImage(imgElement) {
    const fullImage = document.getElementById('fullImage');
    const fullImageSrc = document.getElementById('fullImageSrc');
    fullImageSrc.src = imgElement.src;
    fullImage.style.visibility = 'visible';
}

function closeFullImage(event) {
    if (event.target.id !== 'fullImageSrc') {
        const fullImage = document.getElementById('fullImage');
        fullImage.style.visibility = 'hidden';
    }
}