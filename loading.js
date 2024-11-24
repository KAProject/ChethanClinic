document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('content').classList.add('visible');
    }, 3000); // 3 seconds delay
});

