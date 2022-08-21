function playerListCheck(idName) {
    const playersList = document.querySelectorAll('li')
    for (let i = 1; i <= playersList.length; i++) {
        if (playersList[i - 1].innerText.includes('Player-' + i + '')) {
            const getId = playersList[i - 1].getAttribute('id');
            const getName = getText(idName);
            setText(getId, getName);
            document.getElementById(idName + '-' + 'btn').setAttribute('disabled', true);
            break;
        }
    }
}

function getText (id) {
    const getTextElement = document.getElementById (id);
    const getText = getTextElement.innerText;
    return getText;
}

function setText (id, value) {
    const setTextElement = document.getElementById (id);
    setTextElement.innerText = value;
}