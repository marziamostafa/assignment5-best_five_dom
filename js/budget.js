
document.getElementById('btn-player-budget-calculate').addEventListener('click', function () {
    const playerAmount = playerbudget();
    const getPlayerExpenses = countTotal('get-player-expenses')
    getPlayerExpenses.innerText = playerAmount;
})

document.getElementById('btn-total-budget-calculate').addEventListener('click', function () {
    const managerbudget = getAmount('manager-budget');
    const coachbudget = getAmount('coach-budget');
    const playerAmount = playerbudget();
    const totalAmount = playerAmount + managerbudget + coachbudget;

    const totalexpenses = countTotal('total-Amount');
    totalexpenses.innerText = totalAmount;
})
function getAmount(budgetid) {
    const personrBudget = document.getElementById(budgetid);
    const personBudgetStr = personrBudget.value;

    const personBudgetAmount = parseInt(personBudgetStr);
    return personBudgetAmount;
}
function playerbudget() {
    const perPlayerBudgetAmount = getAmount('per-player-budget');
    const watchplayers = playersList.length;
    const playerAmount = watchplayers * perPlayerBudgetAmount;
    return playerAmount;
}

function countTotal(getId) {
    const getTotalExpenses = document.getElementById(getId);
    return getTotalExpenses;
}