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
    // convert array like object to original array 
    const updatedPlayerListArray = [];
    for (let i = 0; i < playersList.length; i++) {
        updatedPlayerListArray.push(playersList[i].innerText.toLowerCase());
    }

    let count = 0;
    for (let i = 0; i < updatedPlayerListArray.length; i++) {
        if (updatedPlayerListArray[i].includes('player') === false) {
            count++;
            console.log(count);
            if (count === 5) {
                count2++;
                console.log(count2);
                if (count2 > 1) {
                    alert('5 Players Already Selected');
                }
            }
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
    setTextElement.classList.remove('text-secondary');
    setTextElement.classList.add('text-white');
    setTextElement.innerText = value;
}