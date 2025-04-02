
function changeTheme(bgColor, containerColor) {
    // Update body background color
    document.body.style.backgroundColor = bgColor;

    // Update container background color
    const container = document.querySelector('.flashcard-container');
    if (container) {
        container.style.backgroundColor = containerColor;
    }

    // Ensure theme buttons remain visible
    const themeButtons = document.querySelectorAll('.theme-button');
    themeButtons.forEach(button => {
        button.style.borderColor = 'white';
    });

    // Update all buttons to match theme
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = bgColor;
        button.style.color = 'white';
    });
}

function addFlashcard() {
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question && answer) {
        // Create a new flashcard
        const flashcardDiv = document.createElement('div');
        flashcardDiv.classList.add('flashcard');

        flashcardDiv.innerHTML = `
            <p><strong>Question:</strong> ${question}</p>
            <p><strong>Answer:</strong> ${answer}</p>
        `;

        // Append it to the flashcards list
        const flashcardsList = document.getElementById('flashcards-list');
        flashcardsList.appendChild(flashcardDiv);

        // Clear the inputs
        questionInput.value = '';
        answerInput.value = '';
    } else {
        alert('Please fill in both the question and the answer.');
    }
}
