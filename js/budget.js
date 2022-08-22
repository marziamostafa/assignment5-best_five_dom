
document.getElementById('btn-player-budget-calculate').addEventListener('click', function () {
    const perPlayerBudgetAmount = getAmountById('per-player-budget');
    if (isNaN(perPlayerBudgetAmount)) {
        alert('Please give valid input');
        return;
    }
    const watchplayers = playersList.length;
    const playerAmount = watchplayers * perPlayerBudgetAmount;
    const getPlayerExpenses = countTotal('get-player-expenses')
    getPlayerExpenses.innerText = playerAmount;
})

document.getElementById('btn-total-budget-calculate').addEventListener('click', function () {
    const managerbudget = getAmountById('manager-budget');
    const coachbudget = getAmountById('coach-budget');
    if (isNaN(managerbudget) || isNaN(coachbudget)) {
        alert('Please give valid input');
        return;

    }
    const perplayerAmount = countTotal('get-player-expenses');
    const perplayerAmountStr = perplayerAmount.innerText
    const playerAmount = parseInt(perplayerAmountStr);
    const totalAmount = playerAmount + managerbudget + coachbudget;

    const totalexpenses = countTotal('total-Amount');
    totalexpenses.innerText = parseInt(totalAmount);
    console.log(typeof (totalexpenses.innerText))
})
function getAmountById(budgetid) {
    const personBudget = document.getElementById(budgetid);
    const personBudgetStr = personBudget.value;

    const personBudgetAmount = parseInt(personBudgetStr);
    return personBudgetAmount;
}

function countTotal(getId) {
    const getTotalExpenses = document.getElementById(getId);
    return getTotalExpenses;
}