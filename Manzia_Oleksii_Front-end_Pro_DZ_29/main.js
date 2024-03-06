// Дз 29

const emojis = ['😊', '😄', '😍', '😎', '😂'];

const votes = {};

emojis.forEach(emoji => votes[emoji] = 0);

const votingResults = document.getElementById('votingResults');

function updateResults() {
    votingResults.innerHTML = '';

    emojis.forEach(emoji => {
        const emojiElement = document.createElement('span');
        emojiElement.classList.add('emoji');
        emojiElement.textContent = emoji;

        emojiElement.addEventListener('click', function(){
            votes[emoji]++;
            updateResults();
        });

        const countElement = document.createElement('span');
        countElement.textContent = votes[emoji];

        votingResults.appendChild(emojiElement);
        votingResults.appendChild(countElement);
        votingResults.appendChild(document.createElement('br'));
    });
}

updateResults();
