//console.log('button');



document.getElementById('btn-player-budget-calculate').addEventListener('click', function () {

    const perPlayerBudgetAmount = getAmount('per-player-budget');

    const watchplayers = playersList.length;

    const amount = watchplayers * perPlayerBudgetAmount;
    console.log(amount);

    const getPlayerExpenses = document.getElementById('get-player-expenses');
    getPlayerExpenses.innerText = amount;
})

document.getElementById('btn-total-budget-calculate').addEventListener('click', function () {
    const managerbudget = getAmount('manager-budget');
    const coachbudget = getAmount('coach-budget');
    console.log(coachbudget);


})
function getAmount(budgetid) {
    const personrBudget = document.getElementById(budgetid);
    const personBudgetStr = personrBudget.value;

    const personBudgetAmount = parseInt(personBudgetStr);
    return personBudgetAmount;
}