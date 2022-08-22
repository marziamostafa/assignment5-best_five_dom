const playersList = [];


function displayPlayersList(allPlayers) {
    const allPlayerList = document.getElementById('player-list');
    allPlayerList.innerHTML = "";

    for (let i = 0; i < allPlayers.length; i++) {
        const li1 = document.createElement('li');
        li1.innerHTML = `<li>${i + 1}. ${allPlayers[i]}</li>`;
        allPlayerList.appendChild(li1);

    }
}


function addPlayer(element) {
    const playerName = element.parentNode.children[1].innerText;
    console.log(playerName);
    if (playersList.length < 5) {
        playersList.push(playerName);
        element.setAttribute('disabled', true);
        element.style.backgroundColor = 'gray';
        element.innerText = "Selected";

    }
    else {
        alert('You cannot select more than 5');
        return;
    }


    displayPlayersList(playersList);

}

