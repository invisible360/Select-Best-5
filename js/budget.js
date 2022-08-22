// Budget Calculation
document.getElementById ('total-cost-of-each-players-btn').addEventListener('click', function () {
    const playersList = document.querySelectorAll('li');
    const myArray = coverArrayLikeObjectToArray (playersList);
    
    let count = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].includes('player') === false) {
            count++;
        }
    }

    //Only Selected Player cost Calculation
    const perPlayerCost = getInputValueAsNumber ('per-player-cost');
    const totalCostOfSelectedPlayers = perPlayerCost * count;
    document.getElementById('players-expenses-amount').innerText = totalCostOfSelectedPlayers;
})

document.getElementById ('total-cost-btn').addEventListener ('click', function () {
    const playerExpenses = getTextValueAsNumber ('players-expenses-amount');
    const managerCost = getInputValueAsNumber ('manager-cost');
    const coachCost = getInputValueAsNumber ('coach-cost');
    const totalCost = playerExpenses + managerCost + coachCost;
    document.getElementById ('total-amount').innerText = totalCost;
})