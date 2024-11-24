const feedbackList = document.getElementById('feedback-list');
const password = 'Kuber'; // Admin password for deleting feedback

function loadFeedback() {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbackList.innerHTML = '';
    feedbacks.forEach((feedback, index) => {
        feedbackList.innerHTML += `
            <div class="feedback-item">
                ${feedback}
                <button class="delete-button" onclick="deleteFeedback(${index})">Delete</button>
            </div>
        `;
    });
}

function addFeedback() {
    const feedback = document.getElementById('feedback').value;
    if (feedback.trim() === '') return;
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    document.getElementById('feedback').value = '';
    loadFeedback();
}

function deleteFeedback(index) {
    const userPassword = prompt('Enter admin password to delete this feedback:');
    if (userPassword === password) {
        let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        feedbacks.splice(index, 1);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        loadFeedback();
    } else {
        alert('Incorrect password.');
    }
}

window.onload = loadFeedback;
